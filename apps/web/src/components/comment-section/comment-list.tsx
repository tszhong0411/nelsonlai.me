'use client'

import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query'
import { useTranslations } from '@tszhong0411/i18n/client'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { getSingletonHighlighterCore } from 'shiki'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'
import githubDarkDefault from 'shiki/themes/github-dark-default.mjs'
import githubLightDefault from 'shiki/themes/github-light-default.mjs'
import { useShallow } from 'zustand/react/shallow'

import { useCommentsContext } from '@/contexts/comments.context'
import { useCommentParams } from '@/hooks/use-comment-params'
import { orpc } from '@/orpc/client'
import { useHighlighterStore } from '@/stores/highlighter.store'

import Comment from './comment'
import CommentHeader from './comment-header'
import CommentLoader from './comment-loader'

const CommentList = () => {
  const { slug, sort } = useCommentsContext()
  const [params] = useCommentParams()
  const t = useTranslations()
  const { highlighter, setHighlighter } = useHighlighterStore(
    useShallow((state) => ({
      highlighter: state.highlighter,
      setHighlighter: state.setHighlighter
    }))
  )

  const { status, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    orpc.posts.comments.list.infiniteOptions({
      input: (pageParam: Date | undefined) => ({
        slug,
        sort,
        type: 'comments',
        highlightedCommentId: params.comment ?? undefined,
        cursor: pageParam
      }),
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      placeholderData: keepPreviousData
    })
  )

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage()
  }, [fetchNextPage, hasNextPage, inView])

  useEffect(() => {
    if (highlighter) return

    getSingletonHighlighterCore({
      themes: [githubLightDefault, githubDarkDefault],
      engine: createOnigurumaEngine(import('shiki/wasm'))
    }).then((instance) => {
      setHighlighter(instance)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only run once
  }, [])

  const isSuccess = status === 'success'
  const isError = status === 'error'
  const isLoading = status === 'pending' || isFetchingNextPage
  const noComments = status === 'success' && data.pages[0]?.comments.length === 0

  return (
    <>
      <CommentHeader />
      <div className='space-y-8 py-2' data-testid='comments-list'>
        {isSuccess &&
          data.pages.map((page) =>
            page.comments.map((comment) => <Comment key={comment.id} comment={comment} />)
          )}
        {noComments && (
          <div className='flex min-h-20 items-center justify-center'>
            <p className='text-muted-foreground text-sm'>{t('blog.comments.no-comments')}</p>
          </div>
        )}
        {isError && (
          <div className='flex min-h-20 items-center justify-center'>
            <p className='text-muted-foreground text-sm'>
              {t('blog.comments.failed-to-load-comments')}
            </p>
          </div>
        )}
        {isLoading && <CommentLoader />}
        <span ref={ref} className='invisible' />
      </div>
    </>
  )
}

export default CommentList
