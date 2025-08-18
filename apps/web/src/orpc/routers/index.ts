import type { Inputs, Outputs } from '../client'

import { listAllComments, listAllUsers } from './admin'
import { likesStats, viewsStats } from './blog'
import { countComments, createComment, deleteComment, listComments } from './comments'
import { githubStats } from './github'
import { createMessage, deleteMessage, listMessages } from './guestbook'
import { countLike, incrementLike } from './likes'
import { countReplies } from './replies'
import { spotifyStats } from './spotify'
import { countView, incrementView } from './views'
import { createVote } from './votes'
import { wakatimeStats } from './wakatime'
import { youtubeStats } from './youtube'

export const router = {
  stats: {
    github: githubStats,
    youtube: youtubeStats,
    wakatime: wakatimeStats,
    spotify: spotifyStats,
    blog: {
      views: viewsStats,
      likes: likesStats
    }
  },
  posts: {
    views: {
      count: countView,
      increment: incrementView
    },
    likes: {
      count: countLike,
      increment: incrementLike
    },
    comments: {
      list: listComments,
      create: createComment,
      delete: deleteComment,
      count: countComments
    },
    replies: {
      count: countReplies
    },
    votes: {
      create: createVote
    }
  },
  guestbook: {
    list: listMessages,
    create: createMessage,
    delete: deleteMessage
  },
  admin: {
    listAllComments,
    listAllUsers
  }
}

export type ListCommentsInput = Inputs['posts']['comments']['list']
export type ListCommentsOutput = Outputs['posts']['comments']['list']

export type ListMessagesOutput = Outputs['guestbook']['list']

export type ListAllCommentsOutput = Outputs['admin']['listAllComments']
export type ListAllUsersOutput = Outputs['admin']['listAllUsers']

export type GetViewsOutput = Outputs['posts']['views']['count']
export type GetLikesOutput = Outputs['posts']['likes']['count']
