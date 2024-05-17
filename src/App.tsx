import { useState } from 'react'
import { MarkdownEditor } from './markdown-editor'
import { MarkdownViewer } from './markdown-viewer'

function App() {
  const [content, setContent] = useState<string>('')

  return (
    <div className='grid grid-cols-2 h-screen'>
      <div>
        <MarkdownEditor value={content} onChange={setContent}/>
      </div>
      <div>
        <MarkdownViewer value={content}/>
      </div>
    </div>
  )
}

export default App
