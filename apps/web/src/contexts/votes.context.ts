import { createContext, use } from 'react'

type VotesContextValue = {
  increment: () => void
  decrement: () => void
  getCount: () => number
}

const VotesContext = createContext<VotesContextValue | null>(null)
VotesContext.displayName = 'VotesContext'

export const useVotesContext = (): VotesContextValue => {
  const context = use(VotesContext)

  if (!context) {
    throw new Error('useVotesContext must be used within a VotesProvider')
  }

  return context
}

export const VotesProvider = VotesContext.Provider
