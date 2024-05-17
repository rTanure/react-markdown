interface MarkdownViewerProps {
  value: string;
}
import Markdown from "react-markdown";

export function MarkdownViewer({ value }: MarkdownViewerProps) {
  return (
    <div className="w-full h-full p-4 flex flex-col">
      <Markdown 
      className="h-full"
      components={{
        
        h1(props) {return <h2 className="text-4xl font-semibold border-b pb-2 mb-10">{props.children}</h2>},
        h2(props) {return <h3 className="text-3xl font-semibold">{props.children}</h3>},
        h3(props) {return <h4 className="text-2xl font-semibold">{props.children}</h4>},
        h4(props) {return <h5 className="text-xl font-semibold">{props.children}</h5>},
        h5(props) {return <h6 className="text-lg font-semibold">{props.children}</h6>},
        h6(props) {return <h6 className="text-base font-semibold">{props.children}</h6>},

        p(props) {return <p className="text-lg my-4">{props.children}</p>},

        a(props) {return <a className="text-blue-500 hover:underline" href={props.href}>{props.children}</a>},
        img(props) {return <img className="my-4 max-h-80 mx-auto" src={props.src} alt={props.alt}/>},

        blockquote(props) {return <blockquote className="border-l-4 border-gray-400 pl-4 my-4">{props.children}</blockquote>},

        ol(props) {return <ol className="list-decimal list-inside my-4">{props.children}</ol>},
        ul(props) {return <ul className="list-disc list-inside my-4">{props.children}</ul>},

        code(props) {return <code className="block p-2 bg-gray-200 rounded my-4">{props.children}</code>},
      }}>
        {value}
      </Markdown>
    </div>
  )
}