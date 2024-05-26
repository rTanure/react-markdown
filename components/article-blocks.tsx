import { cn } from "@/lib/utils"
import React from "react"
/*
  H -> children
  p -> children

  a -> href, children
  img -> alt, src
  blockquote -> children
  ol -> children
  ul -> children
  code -> children
*/

type DefaultProps<T = unknown> = {
  className?: string
} & T

type childrenBlockProps = DefaultProps<{
  children: React.ReactNode
}>

type titleBlockProps = DefaultProps<{
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
}>

type ImageBlockProps = DefaultProps<{
  alt: string | undefined,
  src: string | undefined
}>

type LinkBLockProps = DefaultProps<{
  href: string | undefined,
  children: React.ReactNode
}>

export function Title({children, level, className} : titleBlockProps) {
  if(level === 1) return <h2 className={cn("text-4xl font-semibold border-b pb-2 mb-10", className)}>{children}</h2>
  if(level === 2) return <h3 className={cn("text-3xl font-semibold", className)}>{children}</h3>
  if(level === 3) return <h4 className={cn("text-2xl font-semibold", className)}>{children}</h4>
  if(level === 4) return <h5 className={cn("text-xl font-semibold", className)}>{children}</h5>
  if(level === 5) return <h6 className={cn("text-lg font-semibold", className)}>{children}</h6>
  if(level === 6) return <h6 className={cn("text-base font-semibold", className)}>{children}</h6>
}

export function Paragraph({children, className}: childrenBlockProps) {
  return <p className={cn("text-lg", className)}>{children}</p>
}

export function Anchor({href, children, className}: LinkBLockProps) {
  return <a className={cn("text-blue-500 hover:underline", className)} href={href}>{children}</a>
}

export function Image({alt, src}: ImageBlockProps) {
  return (
    <div className="w-full">
      <img className="my-4 max-h-80 mx-auto" src={src} alt={alt}/>
      <p className="text-center">{alt}</p>
    </div>
  )
}

export function Blockquote({children, className}: childrenBlockProps) {
  return (
    <blockquote className={cn("border-l-4 border-gray-400 pl-4 my-4", className)}>{children}</blockquote>
  )
}

export function OrderedList({children, className}: childrenBlockProps) {
  return (
    <ol className={cn("list-decimal list-inside my-4", className)}>{children}</ol>
  )
}

export function UnorderedList({children, className}: childrenBlockProps) {
  return (
    <ul className={cn("list-disc list-inside my-4", className)}>{children}</ul>
  )
}

export function Code({children, className}: childrenBlockProps) {
  return (
    <ul className={cn("block p-2 bg-gray-200 rounded my-4", className)}>{children}</ul>
  )
}