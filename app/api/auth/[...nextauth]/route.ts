import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

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
        console.log(credentials);
        console.log(user);
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return { email: "asfas", id: "asdfas", some: "thing" };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
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
