'use client'

import { Toaster } from '@tszhong0411/ui/components/sonner'
import { TooltipProvider } from '@tszhong0411/ui/components/tooltip'
import { ThemeProvider } from 'next-themes'

import { ORPCQueryProvider } from '@/orpc/tanstack-query/client'

type ProvidesProps = {
  children: React.ReactNode
}

const Providers = (props: ProvidesProps) => {
  const { children } = props

  return (
    <ORPCQueryProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        enableColorScheme
        disableTransitionOnChange
      >
        <TooltipProvider>
          {children}
          <Toaster
            toastOptions={{
              duration: 2500
            }}
            visibleToasts={5}
            expand
          />
        </TooltipProvider>
      </ThemeProvider>
    </ORPCQueryProvider>
  )
}

export default Providers
