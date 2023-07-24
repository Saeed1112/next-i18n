import React from "react";
import Image from "next/image";

const AuthSide = () => {
  return (
    <div className="relative flex-1 overflow-hidden">
      <div className="relative z-10 flex h-full w-full items-center justify-center"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/background-2.jpg?2"
          width="1980"
          height="1024"
          className="h-full w-full object-cover object-center"
          alt="Background"
        />

        <div className="absolute end-10 top-10 h-52 w-52 rounded-lg bg-white/10 backdrop-blur-sm"></div>
        <div className="absolute end-16 top-16 h-52 w-52 rounded-lg bg-white/20 backdrop-blur-sm"></div>
        <div className="absolute end-24 top-24 h-52 w-52 rounded-lg bg-white/30 backdrop-blur-sm"></div>
        <div className="absolute end-32 start-32 top-32 flex h-52 flex-col gap-2 rounded-lg bg-white/60 px-5 py-5 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Not translated text ....
          </h2>
          <p className="text-base text-neutral-800">This is some dummy text</p>
        </div>

        <div className="absolute bottom-24 start-24 h-52 w-52 rounded-lg bg-purple-300/30 backdrop-blur-sm backdrop-grayscale"></div>
        <div className="absolute bottom-5 start-52 h-52 w-52 rounded-lg bg-green-300/30 backdrop-blur-sm backdrop-grayscale"></div>
      </div>
    </div>
  );
};

export default AuthSide;
