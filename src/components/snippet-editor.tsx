"use client"
import { editSnippet } from "@/actions";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";  
import { useState } from "react";

export default function SnippetEditor({ snippet }: { snippet: Snippet }) {
  const [ code, setCode ] = useState(snippet.code);
  const editSnippetWithOthers = editSnippet.bind(null,snippet.id,code)
  const handChange = (code: string = '') => {
    setCode(code);
  };

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        defaultLanguage="javascript"
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={handChange}
      />
      <form action={editSnippetWithOthers}>
        <button className="p-2 border border-teal-500 rounded">Save</button>
      </form>
    </div>
  );
}

