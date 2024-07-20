"use client";

import React, { useState } from "react";
import { selectTemplateProps } from "./FormSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const FormContainer = ({ selectedTemplate, userFormInput }: selectTemplateProps) => {
  const [formData, setFormData] = useState<any>();

  const onSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData);
    userFormInput(formData)
  };

  const handleInput = (e: any) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <form className="mt-5" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item) => (
          <div className="my-2 flex flex-col gap-2 mb-5" key={item.field}>
            <span className="font-medium">{item.label}</span>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInput}
              />
            ) : (
              <Textarea />
            )}
          </div>
        ))}

        <Button type="submit" className="w-full" variant="default">
          Generate
        </Button>
      </form>
    </div>
  );
};

export default FormContainer;
