import React, { useState } from "react";
import { templateProps } from "../../_components/TemplateSection";
import FormContainer from "./FormContainer";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

export interface selectTemplateProps {
  selectedTemplate?: templateProps;
  userFormInput: any;
  loading: boolean;
}
const FormSection = ({
  selectedTemplate,
  userFormInput,
  loading,
}: selectTemplateProps) => {
  const [formData, setFormData] = useState<any>();

  const onSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData);
    userFormInput(formData);
  };

  const handleInput = (e: any) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="p-5 shadow-md border-2 border-slate-300/20 rounded-lg bg-white">
      <div className="flex items-center justify-between pr-5">
        <h2 className="font-bold text-xl">{selectedTemplate?.name}</h2>
        <span className="flex items-center justify-center my-2 border-2  rounded-lg shadow-md">
          <img src={selectedTemplate?.icon} alt="icon" width={30} height={30} />
        </span>
      </div>
      <p className="font-normal text-md mt-2">
        {selectedTemplate?.description}
      </p>
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

          <Button
            type="submit"
            className="w-full"
            variant="default"
            disabled={loading}
          >
            {loading && <Loader2Icon className="animate-spin h-6 w-6 mr-2" />}
            Generate
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
