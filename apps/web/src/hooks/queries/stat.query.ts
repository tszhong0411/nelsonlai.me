import { useQuery } from '@tanstack/react-query'

import { orpc } from '@/orpc/client'

export const useYouTubeStat = () => {
  return useQuery(orpc.stats.youtube.queryOptions())
}

export const useGitHubStat = () => {
  return useQuery(orpc.stats.github.queryOptions())
}

export const useBlogLikeStat = () => {
  return useQuery(orpc.stats.blog.likes.queryOptions())
}

export const useBlogViewStat = () => {
  return useQuery(orpc.stats.blog.views.queryOptions())
}

export const useWakatimeStat = () => {
  return useQuery(orpc.stats.wakatime.queryOptions())
}

export const useSpotifyStat = () => {
  return useQuery(orpc.stats.spotify.queryOptions())
}
