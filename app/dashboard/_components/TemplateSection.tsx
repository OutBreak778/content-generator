"use client";

import Template from "@/app/(data)/Template";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import TemplateInfo from "./TemplateInfo";

export interface templateProps {
  name: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FormProps[];
}

export interface FormProps {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateSection = ({ userSearchInput }: any) => {
  const [templateList, setTemplateList] = useState(Template);

  useEffect(() => {
    if (userSearchInput) {
      const filterData = Template.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );

      setTemplateList(filterData);
    } else {
      setTemplateList(Template);
    }
  }, [userSearchInput]);

  return (
    <div className="p-3 mt-4 grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {templateList.map((item: templateProps) => (
        <TemplateInfo
          key={item.slug}
          name={item.name}
          icon={item.icon}
          description={item.description}
          category={item.category}
          slug={item.slug}
          aiPrompt={item.aiPrompt}
          //   we can also just spread all the content like -> {...item}
        />
      ))}
    </div>
  );
};

export default TemplateSection;
