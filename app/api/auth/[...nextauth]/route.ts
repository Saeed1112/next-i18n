import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt-ts";
import { User } from "@prisma/client";

export enum AuthProviders {
  Credentials = "Credentials",
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
        if (!user || !(await compare(password, user.password))) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },

  session: { strategy: "jwt" },
  callbacks: {
    session: ({ session, token }) => {
      return { ...session, user: { ...session.user, ...token } };
    },
    jwt: ({ token, user }) => {
      if (user) return { ...token, ...user };
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
