import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-10 mb-20 bg-gray-200">
      <div className="w-full py-8 flex items-center justify-between">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-3xl text-black inline-block">
              HC
              <span className="text-transparent bg-clip-text bg-gradient-to-bl from-green-500 to-blue-900 text-4xl">
                [OD]
              </span>
              ES
            </span>
          </Link>
        </div>

        <div className="flex items-center">
          <Link href="/" passHref>
            <span className="link-underline link-underline-black cursor-pointer  text-black mr-4">
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="link-underline link-underline-black cursor-pointer  text-black mr-4">
              About
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
