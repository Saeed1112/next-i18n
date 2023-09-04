import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt-ts";

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
        if (!user) return null;
        if (await compare(password, user.password)) {
          console.log(user);
          return null;
        }

        return { email: "asfas", id: "asdfas", some: "thing" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },

  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
