import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";

const SearchInput = ({ onClickChange }: any) =>  {
  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <Input
        onChange={(event) => onClickChange(event.target.value)}
        className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
