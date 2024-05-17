import { useState } from 'react'
import { MarkdownEditor } from './markdown-editor'
import { MarkdownViewer } from './markdown-viewer'

function App() {
  const [content, setContent] = useState<string>('')

  return (
    <div className='grid grid-cols-2 max-h-screen'>
      <div className='h-screen'>
        <MarkdownEditor value={content} setContent={setContent}/>
      </div>
      <div className='h-screen overflow-auto p-4'>
        <MarkdownViewer value={content}/>
      </div>
    </div>
  )
}

export default App
