"use client";

import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import RichEditorSection from "../_components/RichEditorSection";
import { templateProps } from "../../_components/TemplateSection";
import Template from "@/app/(data)/Template";
import Link from "next/link";
import { ArrowBigRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/AiPrompt";

interface slugProps {
  params: {
    "content-slug": string;
  };
}

const page = (props: slugProps) => {
  const selectedTemplate: templateProps | undefined = Template.find(
    (item) => item.slug == props.params["content-slug"]
  );

  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState<string>()

  const generateContent = async (formData: any) => {
    // console.log(formData);
    setLoading(true);
    const selectPrompt = selectedTemplate?.aiPrompt;
    const finalPrompt = JSON.stringify(formData) + ", " + selectPrompt;

    const result = await chatSession.sendMessage(finalPrompt);
    console.log(result.response.text());
    setPrompt(result?.response.text())

    setLoading(false);
  };
  return (
    <div className="p-4">
      <Link href="/dashboard">
        <Button variant="outline">
          <ArrowLeft /> back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={generateContent}
          loading={loading}
        />

        <div className="col-span-2">
          <RichEditorSection prompt={prompt} />
        </div>
      </div>
    </div>
  );
};

export default page;
