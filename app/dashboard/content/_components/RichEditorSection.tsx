import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

interface RichEditorProps {
  prompt: string | undefined
}

const RichEditorSection = ({prompt}: RichEditorProps) => {
  
  const editorRef: any = useRef()
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance()
    editorInstance.setMarkdown(prompt)
  }, [prompt])  
  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="font-bold text-xl">Your Result</h2>
      </div>
      <Editor
        ref={editorRef}
        initialValue="your input shows here"
        height="400px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  );
};

export default RichEditorSection;
