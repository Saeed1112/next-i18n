"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { signIn, useSession } from "next-auth/react";
import { AuthProviders } from "@/app/api/auth/[...nextauth]/route";
import { Button, Input } from "@nextui-org/react";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .email({ message: "Please enter a valid email" })
    .nonempty(),
  password: z.string().nonempty({ message: "Please enter your password!" })
});

const Page = () => {
  const t = useTranslations("auth.signin");
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<z.ZodFormattedError<{
    email: string;
    password: string;
  }> | null>();
  const [loading, setLoading] = useState(false);
  const { data } = useSession();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validation = schema.safeParse(user);

    if (!validation.success) {
      setErrors(validation.error.format());
      return;
    } else {
      setErrors(null);
    }

    setLoading(true);
    const result = await signIn(AuthProviders.Credentials, {
      ...user,
      redirect: false,
      callbackUrl: "/"
    });
    setLoading(false);
  }

  function updateValue(e: React.ChangeEvent<HTMLInputElement>) {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="mx-auto flex flex-1 items-center justify-center bg-background">
      <form
        className="flex w-96 max-w-sm flex-col px-3 py-16"
        onSubmit={onSubmit}
      >
        {JSON.stringify(data)}
        <h2 className="text-2xl font-bold">{t("welcome")}</h2>
        <p className="text-sm text-neutral-400">{t("message")}</p>
        <div className="mt-10 flex flex-col gap-5">

          <Input
            onChange={updateValue}
            type="text"
            inputMode="email"
            name="email"
            label={t("email.value")}
            placeholder="myemail@gmail.com"
            description="We'll never share your email with anyone else."
            className="max-w-xs"
            validationState={errors?.email?._errors[0] ? "invalid" : "valid"}
            errorMessage={errors?.email?._errors[0] }
          />

          <Input
            onChange={updateValue}
            type="password"
            name="password"
            label={t("password")}
            placeholder="Your very secure password ..."
            description="We'll never share your email with anyone else."
            className="max-w-xs"
            validationState={errors?.password?._errors[0] ? "invalid" : "valid"}
            errorMessage={errors?.password?._errors[0] }
          />


          <div className="flex flex-wrap gap-2">
            <Button color="secondary" radius="sm" type="submit" isLoading={loading}>
              {t("sign_in")}
            </Button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
