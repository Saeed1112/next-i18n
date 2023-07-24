"use client";
import React, { useEffect, useState } from "react";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useTranslations } from "next-intl";

type CheckBoxProps = {
  children: React.ReactNode;
};

function CheckBox({
  children,
  className,
  type,
  ...rest
}: CheckBoxProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) {
  return (
    <label className="flex select-none items-center gap-2">
      <span className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-md border-2 border-[--primary]">
        <input type="checkbox" className="peer" hidden {...rest} />
        <span className="absolute inset-0 scale-0 rounded-lg bg-[--primary] transition-all delay-200 duration-200 peer-checked:scale-100 peer-checked:rounded-sm peer-checked:delay-0"></span>
        <span className="absolute mb-0.5 h-1/3 w-8/12 scale-0 border-b-2 border-l-2 border-white transition-all delay-0 duration-300 peer-checked:-rotate-45 peer-checked:scale-100 peer-checked:delay-100"></span>
      </span>
      <span className="text-sm text-neutral-600 ltr:mt-1">{children}</span>
    </label>
  );
}

function WelcomeMessage() {
  const t = useTranslations("auth");

  return (
    <>
      <h2 className="text-2xl font-bold text-neutral-900">
        {t("signin.welcome")}
      </h2>
      <p className="text-sm text-neutral-400">{t("signin.message")}</p>
    </>
  );
}

const Page = () => {
  const t = useTranslations("auth");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loading && setTimeout(() => setLoading(false), 4000);
  }, [loading]);

  return (
    <div className="mx-auto flex flex-1 items-center justify-center bg-[--background] ">
      <div className="flex w-96 max-w-sm flex-col px-3 py-16">
        <WelcomeMessage />
        <div className="mt-10 flex flex-col gap-5">
          <div>
            <TextInput
              type="email"
              label={t("signin.email.value")}
              placeholder={`${t("signin.email.address")} ...`}
            />
          </div>
          <div>
            <TextInput
              type="password"
              label={t("signin.password")}
              placeholder={`${t("signin.password")} ...`}
            />
          </div>

          <div className="flex items-center justify-between">
            <CheckBox>{t("signin.remember")}</CheckBox>
            <a className="text-xs text-neutral-400" href="#">
              {t("signin.forget_password")}
            </a>
          </div>
          <div>
            <Button
              onClick={() => setLoading((state) => !state)}
              loading={loading}
            >
              {t("signin.sign_in")}
            </Button>
          </div>
        </div>
        <Or />

        <div className="flex gap-3">
          <GoogleAuthButton />
        </div>
      </div>
    </div>
  );
};

export default Page;

function Or() {
  const t = useTranslations("auth");
  return (
    <div className="my-5 flex items-center gap-4">
      <div className="h-[1px] flex-1 bg-neutral-200" />
      <span className="font-medium">{t("signin.or")}</span>
      <div className="h-[1px] flex-1 bg-neutral-200" />
    </div>
  );
}

type ButtonProps = {
  loading?: boolean;
};

function Button({
  loading,
  children,
  ...rest
}: ButtonProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) {
  return (
    <button
      disabled={loading}
      className="relative flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-[--primary] font-medium text-white"
      {...rest}
    >
      <span className={loading ? "invisible" : "visible"}>{children}</span>
      <div
        className={`absolute inset-0 flex animate-pulse items-center justify-center ${
          loading ? "visible" : "invisible"
        }`}
      >
        Any loading indicator
      </div>
    </button>
  );
}

function GoogleAuthButton() {
  const t = useTranslations("auth");
  return (
    <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-neutral-100 text-sm font-semibold text-neutral-600">
      <div className="aspect-square w-5">
        <Image
          src="/images/google-logo.png"
          alt="Google Logo"
          height={128}
          width={128}
          className="aspect-square h-full "
        />
      </div>
      <span className="mt-1">{t("signin.use_google")}</span>
    </button>
  );
}
