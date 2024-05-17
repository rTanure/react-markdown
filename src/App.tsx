import { useState } from 'react'

import Markdown from 'react-markdown'

function App() {

  const content = `
# Olá
## Aqui é um subtitulo

Aqui é um parágrafo

  `

  return (
    <>
      <Markdown>{content}</Markdown>
    </>
  )
}

export default App
