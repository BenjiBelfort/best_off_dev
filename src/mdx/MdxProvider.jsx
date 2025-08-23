// src/mdx/MdxProvider.jsx
import { MDXProvider } from '@mdx-js/react'
import Separator from '../components/ui/Separator.jsx'
import { Link as RouterLink } from 'react-router-dom'

function Callout({ children }) {
  return (
    <div className="my-4 mx-8 rounded-xs border-2 border-yellow-200/7 bg-yellow-50/4 p-4 text-yellow-50">
      {children}
    </div>
  )
}

function A(props) {
  const { href = '', children, ...rest } = props
  const isExternal = /^https?:\/\//.test(href) || href.startsWith('//')
  const cls = "underline underline-offset-2 hover:opacity-90"
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
      {children}
    </a>
  ) : (
    <RouterLink to={href} className={cls} {...rest}>
      {children}
    </RouterLink>
  )
}

const components = {
  h1: (p) => <h1 {...p} className="mb-4 text-3xl font-bold tracking-tight" />,
  h2: (p) => <h2 {...p} className="mt-8 mb-3 text-2xl font-semibold tracking-tight" />,
  h3: (p) => <h3 {...p} className="mt-6 mb-2 text-xl font-semibold" />,
  h4: (p) => <h4 {...p} />,
  p:  (p) => <p  {...p} className="mb-4 leading-relaxed" />,
  a:  A,
  ul: (p) => <ul {...p} className="mx-8 mb-4 list-disc pl-6" />,
  ol: (p) => <ol {...p} className="mb-4 list-decimal pl-6" />,
  blockquote: (p) => <blockquote {...p} className="mx-8 my-4 border-l-4 border-white/30 pl-4 italic" />,
  Separator,
  Callout,
}

export default function MdxProvider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
