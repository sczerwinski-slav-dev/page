import * as React from 'react'
import ErrorAlert from '../feedback/ErrorAlert.tsx'
import MaterialMarkdown from '../markdown/MaterialMarkdown.tsx'
import Post from '../../types/Post.tsx'
import PostSkeleton from '../posts/PostSkeleton.tsx'
import Typography from '@mui/material/Typography'
import {formatDate} from '../../utils/date.tsx'
import {getPost} from '../../api/get-post.tsx'
import {useParams} from 'react-router'

interface PostContentInnerProps {
  post: Post | null
  loading: boolean
}

function PostContentInner(props: PostContentInnerProps) {
  const {post, loading} = props

  if (loading) {
    return (<PostSkeleton />)
  }

  if (post) {
    return (
      <React.Fragment>
        <Typography variant="h1">{post.title}</Typography>
        <Typography sx={{ color: 'text.secondary', mb: 4 }}>
          {formatDate(post.date)}
        </Typography>
        <MaterialMarkdown markdown={post.content} />
      </React.Fragment>
    )
  }
}

function PostContent() {
  const {postId} = useParams(),
    [post, setPost] = React.useState<Post | null>(null),
    [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (postId) {
      setError(null)
      setPost(null)
      getPost(postId)
        .then(setPost)
        .catch((reason: unknown) => {
          if (reason instanceof Error) {
            setError(reason.message)
          }
        })
    }
  }, [postId])

  return (
    <React.Fragment>
      <ErrorAlert message={error} />
      <PostContentInner post={post} loading={!post && !error} />
    </React.Fragment>
  )
}

export default PostContent
