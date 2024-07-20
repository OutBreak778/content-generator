"use client";

import { UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between px-8 border-b-2 h-20 transition-all delay-100 bg-white">
        <div className="flex-row items-center justify-center w-full md:hidden">
          <Logo />
        </div>
        <div className="absolute left-4">
          <MobileNavbar />
        </div>
        <div className="absolute right-20 hidden md:block flex-row">
          <Link
            href="https://github.com/OutBreak778"
            className="border-2 px-3 py-2 hover:bg-gray-300/20 text-slate-500 font-medium rounded-full text-lg mr-3"
            target="_blank"
          >
            🔥 Visit my Github profile here !!!
          </Link>
        </div>
        <div className="absolute right-8">
          <UserButton />
        </div>
      </div>
    </>
  );
};

export default Header;
