"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AtSign, Lock } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { AuthProviders } from "@/app/api/auth/[...nextauth]/route";

type CheckBoxProps = {
  children: React.ReactNode;
};

const Page = () => {
  const t = useTranslations("auth.signin");
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { data } = useSession();

  async function onSubmit() {
    setLoading(true);
    const result = await signIn(AuthProviders.Credentials, {
      ...user,
      redirect: false,
      callbackUrl: "/",
    });
    console.log(result?.error && "No user");
    setLoading(false);
  }

  return (
    <div className="mx-auto flex flex-1 items-center justify-center bg-background">
      <div className="flex w-96 max-w-sm flex-col px-3 py-16">
        <h2 className="text-2xl font-bold text-neutral-900">{t("welcome")}</h2>
        <p className="text-sm text-neutral-400">{t("message")}</p>
        <div className="mt-10 flex flex-col gap-5">
          <Input
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
            icon={<AtSign size={20} />}
            className="h-10"
            label={t("email.value")}
            placeholder={`${t("email.address")} ...`}
            type={"email"}
            inputMode={"email"}
          />
          <Input
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
            icon={<Lock size={20} />}
            className="h-10"
            type="password"
            label={t("password")}
            placeholder={`${t("password")} ...`}
          />

          <div className="flex items-center justify-between">
            <a className="text-xs text-neutral-400" href="#">
              {t("forget_password")}
            </a>
          </div>
          <div>{JSON.stringify(data)}</div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="default"
              size="lg"
              loading={loading}
              onClick={() => onSubmit()}
            >
              {t("sign_in")}
            </Button>
            <Button variant="secondary" size="lg">
              <Image
                src="/images/google-logo.png"
                alt="Google Logo"
                height={128}
                width={128}
                className="aspect-square h-5 w-5 object-center"
              />
              {t("use_google")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
