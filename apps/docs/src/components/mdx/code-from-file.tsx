import fs from 'node:fs/promises'
import path from 'node:path'

import { CodeBlock } from '@tszhong0411/ui/components/code-block'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki/bundle/web'

type CodeFromFileProps = {
  filePath: string
  lang?: string
  title?: string
}

const CodeFromFile = async (props: CodeFromFileProps) => {
  const { filePath, lang, title } = props

  const code = await fs.readFile(path.join(process.cwd(), '../../', filePath), 'utf8')
  const fileLanguage = lang ?? filePath.split('.').pop() ?? 'plaintext'

  const out = await codeToHast(code, {
    lang: fileLanguage,
    themes: {
      light: 'github-light',
      dark: 'github-dark'
    },
    defaultColor: false
  })

  return (
    <>
      {toJsxRuntime(out, {
        Fragment,
        jsx,
        jsxs,
        components: {
          pre: (p) => <CodeBlock data-lang={fileLanguage} title={title} {...p} />
        }
      })}
    </>
  )
}

export default CodeFromFile
