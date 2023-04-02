"use client"
import Editor from "@monaco-editor/react";
import { useState } from "react";
interface TextEditorProps{
  onChange: (key: string, value: string) => void;
  language: string;
  code: string;
  theme: string;
}
export default function TextEditor({ onChange, language, code, theme }: TextEditorProps) {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value: any) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        language={language || "javascript"}
        value={value}
        theme={"cobalt"}
        defaultValue="// new file"
        onChange={handleEditorChange}
        height="100%"
        width="100%"
      />
    </div>
  )
}
