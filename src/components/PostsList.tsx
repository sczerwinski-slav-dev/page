import * as React from 'react'
import Grid from '@mui/material/Grid2'
import PostCard from './PostCard.tsx'
import PostStub from '../types/PostStub.tsx'
import {getPosts} from '../api/get-posts.tsx'
import {useErrors} from '../hooks/use-errors.tsx'

function PostsList() {
  const [posts, setPosts] = React.useState<PostStub[]>([]),
    [, dispatchError] = useErrors()

  React.useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch((reason: unknown) => {
        if (reason instanceof Error) {
          dispatchError(reason.message)
        }
      })
  }, [dispatchError])

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid key={post.id} size={{md: 4, sm: 6, xs: 12}}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PostsList
