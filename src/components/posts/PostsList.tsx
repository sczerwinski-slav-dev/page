import * as React from 'react'
import ErrorAlert from '../feedback/ErrorAlert.tsx'
import Grid from '@mui/material/Grid2'
import PostCard from './PostCard.tsx'
import PostStub from '../../types/PostStub.tsx'
import PostsListSkeleton from './PostsListSkeleton.tsx'
import Stack from '@mui/material/Stack'
import {getPosts} from '../../api/get-posts.tsx'

interface PostsListInnerProps {
  posts: PostStub[]
  loading: boolean
}

function PostsListInner(props: PostsListInnerProps) {
  const {posts, loading} = props

  if (loading) {
    return (<PostsListSkeleton />)
  }
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

function PostsList() {
  const [posts, setPosts] = React.useState<PostStub[]>([]),
    [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    setError(null)
    setPosts([])
    getPosts()
      .then(setPosts)
      .catch((reason: unknown) => {
        if (reason instanceof Error) {
          setError(reason.message)
        }
      })
  }, [])

  return (
    <Stack direction='column' spacing={2}>
      <ErrorAlert message={error} />
      <PostsListInner posts={posts} loading={!error && !posts.length} />
    </Stack>
  )
}

export default PostsList
