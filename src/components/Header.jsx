import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 pt-48 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex flex-col items-center justify-center mt-6  ">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={300}
          height={300}
        />
        <h1 className="text-6xl font-bold text-center py-5 mr-10 pl-5 text-96  ">
          Devs Café
        </h1>
        <br />
        <div className=" mt-24">
          <h2 className="text-2xl font-bold text-center align-middle py-5  p-16  pl-5 leading-50 tracking-[-8]">
            Software developers
            <br /> <span>community</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
