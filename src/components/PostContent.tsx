import * as React from 'react'
import ErrorsDispatchContext from './errors/ErrorsDispatchContext.tsx'
import MaterialMarkdown from './markdown/MaterialMarkdown.tsx'
import Post from '../types/Post.tsx'
import Typography from '@mui/material/Typography'
import {formatDate} from '../utils/date.tsx'
import {getPost} from '../api/get-post.tsx'
import {useParams} from 'react-router'

function PostContent() {
  const {postId} = useParams(),
    [post, setPost] = React.useState<Post | null>(null),
    dispatchError = React.useContext(ErrorsDispatchContext)

  React.useEffect(() => {
    if (postId) {
      getPost(postId)
        .then(setPost)
        .catch((reason: unknown) => {
          if (reason instanceof Error) {
            dispatchError(reason.message)
          }
        })
    }
  }, [postId, dispatchError])

  if (!post) {
    return (<React.Fragment />)
  }

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

export default PostContent
