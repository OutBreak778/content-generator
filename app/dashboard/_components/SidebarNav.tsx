"use client";

import React, { useEffect, useState } from "react";
import Logo from "../../../components/Logo";
import {
  FileClock,
  Home,
  LogOutIcon,
  Settings,
  WalletCardsIcon,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { SignOutButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

const MenuList = [
  {
    id: 1,
    name: "Dashboard",
    icon: Home,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const SidebarNav = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="h-full w-full flex-col justify-between bg-white">
      <div className="w-full h-auto flex items-center justify-center">
        <Logo />
      </div>

      <div className="w-60 mt-4 ml-2">
        {MenuList.map((menu) => (
          <div
            key={menu.id}
            onClick={() => router.push(menu.path)}
            className={`${path == menu.path && "bg-slate-300/30 border-2 border-slate-400/10 rounded-md "}`}
          >
            <SidebarItem icon={menu.icon} name={menu.name} path={menu.path} />
          </div>
        ))}
      </div>

      <div className="flex my-2 absolute bottom-4 py-4 items-center ml-2 gap-x-3 w-56 text-slate-500 text-md font-[500] pl-6 transition-all hover:text-slate-600 bg-slate-300/20 cursor-pointer border-2 border-slate-400/10 rounded-md ">
        <SignOutButton>
          <div className="flex">
            <LogOutIcon size={22} className="mr-2" />
            <span>Sign Out</span>
          </div>
        </SignOutButton>
      </div>
    </div>
  );
};

export default SidebarNav;
