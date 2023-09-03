"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Indicator from "@/components/Indicator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type CheckBoxProps = {
  children: React.ReactNode;
};

const Page = () => {
  const t = useTranslations("auth.signin");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loading && setTimeout(() => setLoading(false), 4000);
  }, [loading]);

  return (
    <div className="mx-auto flex flex-1 items-center justify-center bg-background">
      <div className="flex w-96 max-w-sm flex-col px-3 py-16">
        <h2 className="text-2xl font-bold text-neutral-900">{t("welcome")}</h2>
        <p className="text-sm text-neutral-400">{t("message")}</p>
        <div className="mt-10 flex flex-col gap-5">
          <Input
            className="h-10"
            label={t("email.value")}
            placeholder={`${t("email.address")} ...`}
            type={"email"}
            inputMode={"email"}
          />
          <Input
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
          <div className="flex gap-2">
            <Button
              variant="default"
              size="lg"
              loading={loading}
              onClick={() => setLoading((state) => !state)}
            >
              {t("sign_in")}
            </Button>
            <Button variant="secondary" className="flex-1" size="lg">
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
