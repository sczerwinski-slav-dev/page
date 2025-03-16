import * as React from 'react'

import PostStub from '../types/PostStub.tsx'
import {getPosts} from '../api/get-posts.tsx'

import Grid from '@mui/material/Grid2'
import PostCard from './PostCard.tsx'

function PostsList() {
  const [posts, setPosts] = React.useState<PostStub[]>([])

  React.useEffect(() => {
    getPosts().then(setPosts)
  }, [])

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PostsList
