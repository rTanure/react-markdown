import { useEffect, useRef } from "react";
import { FontBoldIcon, FontItalicIcon } from "@radix-ui/react-icons";
import { Button } from "./components/ui/button";

interface MarkdownEditorProps {
  value: string;
  setContent: (value: string) => void;
}

type TextStile = 'italic' | 'bold' | 'underline' ;


export function MarkdownEditor({ value, setContent }: MarkdownEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaClick = () => {

  }

  const aplyStyle = (style: TextStile) => {
    if(!textareaRef.current) return;

    const selection_start = textareaRef.current.selectionStart;
    const selection_end = textareaRef.current.selectionEnd;

    const STYLE_MAP = {italic: '*', bold: '**', underline: '__'}
    const styleTag = STYLE_MAP[style]

    const before = textareaRef.current.value.substring(0, selection_start).trimEnd()
    const selected = textareaRef.current.value.substring(selection_start, selection_end).trim()
    const after = textareaRef.current.value.substring(selection_end).trimStart()

    if(before.endsWith(styleTag) && after.startsWith(styleTag)) {
      setContent(`${before.substring(0, before.length - styleTag.length).trimEnd()} ${selected} ${after.substring(styleTag.length).trimStart()}`)
    } else {
      setContent(`${before} ${styleTag}${selected}${styleTag} ${after}`)
    }

  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <div className="w-full h-full p-4 flex flex-col overflow-auto">
      <header className="p-1 border rounded-lg mb-1 flex gap-1">
        <Button variant="outline" className="size-8 p-1" onClick={() => aplyStyle("italic")}>
          <FontItalicIcon />
        </Button>
        <Button variant="outline" className="size-8 p-1" onClick={() => aplyStyle("bold")}>
          <FontBoldIcon />
        </Button>
      </header>
      <textarea
        onClick={handleTextareaClick}
        ref={textareaRef}
        value={value}
        onChange={handleTextareaChange}
        className="w-full flex-[1] p-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
      />
    </div>
  )
}