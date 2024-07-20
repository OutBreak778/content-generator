import React from "react";
import SidebarNav from "./_components/SidebarNav";
import Header from "../../components/Header";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-col max-h-screen items-center justify-center bg-slate-100 h-screen">
      <div className="md:w-64 hidden md:block fixed h-full border-r-2">
        <SidebarNav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Dashboardlayout;
