import SidebarNav from "@/app/dashboard/_components/SidebarNav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import React from "react";

const MobileNavbar = () => {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger className="flex md:hidden pr-4 hover:opacity-75 transition">
        <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white w-[320px] sm:w-[300px]">
            <SidebarNav />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
