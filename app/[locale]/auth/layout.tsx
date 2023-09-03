import React from "react";
import AuthSide from "@/app/[locale]/auth/components/AuthSide";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1">
      <div className="relative flex w-full flex-shrink-0">
        <div className="absolute bottom-5 end-5 z-10 flex items-center gap-2">
          <LocaleSwitcher />
        </div>
        {children}
      </div>
      <div className="pointer-events-none hidden flex-1 shadow-2xl xl:flex">
        <AuthSide />
      </div>
    </div>
  );
};

export default Layout;
