import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

interface SidebarItemProps {
  icon: LucideIcon;
  name: string;
  path: string;
}

const SidebarItem = ({ icon: Icon, name, path }: SidebarItemProps) => {

  return (
    <Link
      href={path}
    >
      <div
        className={`flex my-1 items-center gap-x-3 w-60 text-slate-500 text-md font-[500] rounded-sm pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20`}
      >
        <div className="flex items-center gap-x-3 py-4">
          <Icon size={22} className={cn("text-slate-500")} />
          {name}
        </div>
        <div
          className={cn("absolute w-[0.18rem] h-[3.4rem] right-0 rounded-xs")}
        />
      </div>
    </Link>
  );
};

export default SidebarItem;
