import {
  Anchor,
  Blockquote,
  Code,
  Image,
  OrderedList,
  Paragraph,
  Title,
  UnorderedList,
} from "../components/article-blocks"

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
  
        h1(props) {return <Title level={1}>{props.children}</Title>},
        h2(props) {return <Title level={2}>{props.children}</Title>},
        h3(props) {return <Title level={3}>{props.children}</Title>},
        h4(props) {return <Title level={4}>{props.children}</Title>},
        h5(props) {return <Title level={5}>{props.children}</Title>},
        h6(props) {return <Title level={6}>{props.children}</Title>},

        p(props) {return <Paragraph>{props.children}</Paragraph>},

        a(props) {return <Anchor href={props.href}>{props.children}</Anchor>},

        img(props) {return <Image alt={props.alt} src={props.src} />},

        blockquote(props) {return <Blockquote >{props.children}</Blockquote>},

        ol(props) {return <OrderedList>{props.children}</OrderedList>},
        ul(props) {return <UnorderedList>{props.children}</UnorderedList>},

        code(props) {return <Code>{props.children}</Code>},
      }}>
        {value}
      </Markdown>
    </div>
  )
}