"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@nextui-org/react";

const Page = () => {
  const { data } = useSession();
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Button
        onClick={() => (data?.user ? signOut({ redirect: false }) : signIn())}
      >
        {data?.user ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
};

export default Page;
