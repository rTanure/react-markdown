interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  return (
    <div className="w-full h-full p-4">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full p-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
      />
    </div>
  )

}