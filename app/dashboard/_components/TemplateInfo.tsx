import React from "react";
import { templateProps } from "./TemplateSection";
import Link from "next/link";
import Image from "next/image";

const TemplateInfo = (item: templateProps) => {
  return (
    <Link href={`/dashboard/content/${item.slug}`} className="cursor-pointer p-2 m-2 py-3 text-sm border hover:border-2 rounded-md border-slate-200 flex-col gap-y-2 mt-3 items-center gap-x-1 hover:border-sky-700/20 hover:scale-105 transition-all shadow-md">
      <div >
        <div className="flex items-center justify-center my-2">
          <Image src={item.icon} alt="icon" width={50} height={50}/>
        </div>
        <h2 className="font-medium flex items-center justify-center text-xl">
          {item.name}
        </h2>
        <p className="flex items-center ju45ify-center ml-4 text-slate-500/80 line-clamp-1">
          {item.description}
        </p>
      </div>
    </Link>
  );
};

export default TemplateInfo;
