import Grid from '@mui/material/Grid2'
import PostCard from './PostCard.tsx'
import PostStub from '../../types/PostStub.tsx'
import PostsListSkeleton from './PostsListSkeleton.tsx'

interface PostsListProps {
  posts: PostStub[]
  loading: boolean
}

function PostsList(props: PostsListProps) {
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

export default PostsList
