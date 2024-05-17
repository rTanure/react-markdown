import { useState } from 'react'
import { MarkdownEditor } from './markdown-editor'

function App() {
  const [content, setContent] = useState<string>('')

  return (
    <div className='grid grid-cols-2 h-screen'>
      <div>
        <MarkdownEditor value={content} onChange={setContent}/>
      </div>
      <div>
        <h1>Teste</h1>
      </div>
    </div>
  )
}

export default App
