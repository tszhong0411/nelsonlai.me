import fs from 'node:fs/promises'
import path from 'node:path'

import { CodeBlock } from '@tszhong0411/ui/components/code-block'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki/bundle/web'

type ComponentInstallationProps = {
  paths: string[]
  deps?: string[]
}

const ComponentInstallation = async (props: ComponentInstallationProps) => {
  const { paths, deps } = props

  const fileBlocks = await Promise.all(
    paths.map(async (filePath, index) => {
      const fullPath = path.join(process.cwd(), '../../packages/ui/src', filePath)

      try {
        const lang = filePath.split('.').pop()

        if (!lang) {
          throw new Error(
            `ComponentInstallation: Invalid file path "${filePath}". File must have an extension.`
          )
        }

        const code = await fs.readFile(fullPath, 'utf8')

        const out = await codeToHast(code, {
          lang,
          themes: {
            light: 'github-light',
            dark: 'github-dark'
          },
          defaultColor: false
        })

        const displayPath = `@/${filePath}`

        return {
          jsx: toJsxRuntime(out, {
            Fragment,
            jsx,
            jsxs,
            components: {
              pre: (p) => <CodeBlock data-lang={lang} title={displayPath} {...p} />
            }
          }),
          index
        }
      } catch {
        throw new Error(
          `ComponentInstallation: File not found at path "${filePath}". Please check the file exists in packages/ui/src/`
        )
      }
    })
  )

  return (
    <div className='space-y-6'>
      {deps && deps.length > 0 && (
        <div className='mb-4'>
          <CodeBlock data-lang='bash' title='Install dependencies'>
            <code>{`npm install ${deps.join(' ')}`}</code>
          </CodeBlock>
        </div>
      )}

      {fileBlocks.map(({ jsx: jsxContent, index }) => (
        <div key={index}>{jsxContent}</div>
      ))}
    </div>
  )
}

export default ComponentInstallation
