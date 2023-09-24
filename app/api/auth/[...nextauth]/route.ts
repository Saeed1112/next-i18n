import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/lib/prisma';
import { compare } from 'bcrypt-ts';
import { User } from '@prisma/client';

export enum AuthProviders {
  Credentials = 'Credentials',
  Google = 'Google',
}

type CredentialsProps = {
  password: string;
  email: string;
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: AuthProviders.Credentials,
      id: AuthProviders.Credentials,
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as CredentialsProps;

        const user = await prisma.user.findUnique({ where: { email } });
        if (
          !user ||
          !user.password ||
          !(await compare(password, user.password))
        ) {
          return null;
        }

        return user;
      },
    }),
    GoogleProvider({
      name: AuthProviders.Google,
      id: AuthProviders.Google,
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: 'email profile openid',
        },
      },
      async profile(profile) {
        const {
          email,
          sub,
          locale,
          email_verified,
          given_name,
          family_name,
          picture,
        } = profile;
        const googleProfile = {
          sub,
          given_name,
          family_name,
          picture,
          locale,
          email_verified,
        };

        return prisma.user.upsert({
          where: { email: email },
          update: { googleProfile },
          create: {
            email,
            googleProfile,
            family: family_name,
            name: given_name,
            emailVerified: true,
          },
        });
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },

  session: { strategy: 'jwt' },
  callbacks: {
    session: ({ session, token }: any) => {
      const user = {
        name: token.name,
        family: token.family,
        picture: token?.googleProfile?.picture,
        createdAt: token.createdAt,
        updatedAt: token.updatedAt,
        emailVerified: token.emailVerified,
      };
      return { expires: session.expires, user };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const { password, ...rest } = user as User;
        return { ...token, ...rest };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
