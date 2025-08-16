'use client'

import type { ListCommentsInput } from '@/orpc/routers'

import { useCallback, useRef, useState } from 'react'

import { CommentsProvider } from '@/contexts/comments.context'
import { VotesProvider } from '@/contexts/votes.context'

import CommentList from './comment-list'
import CommentPost from './comment-post'

type CommentSectionProps = {
  slug: string
}

const CommentSection = (props: CommentSectionProps) => {
  const { slug } = props
  const [sort, setSort] = useState<ListCommentsInput['sort']>('newest')
  const mutationCount = useRef(0)

  const increment = useCallback(() => {
    mutationCount.current += 1
  }, [])

  const decrement = useCallback(() => {
    mutationCount.current -= 1
  }, [])

  const getCount = useCallback(() => mutationCount.current, [])

  return (
    <VotesProvider value={{ increment, decrement, getCount }}>
      <CommentsProvider value={{ slug, sort, setSort }}>
        <div className='space-y-6'>
          <CommentPost />
          <CommentList />
        </div>
      </CommentsProvider>
    </VotesProvider>
  )
}

export default CommentSection
