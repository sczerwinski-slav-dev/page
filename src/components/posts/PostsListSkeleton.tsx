import Grid from '@mui/material/Grid2'
import PostCardSkeleton from './PostCardSkeleton.tsx'

const cardsCount = 5

function PostsListSkeleton() {
  return (
    <Grid container spacing={2}>
      {[...Array(cardsCount).keys()].map((index) => (
        <Grid key={index} size={{md: 4, sm: 6, xs: 12}}><PostCardSkeleton /></Grid>
      ))}
    </Grid>
  )
}

export default PostsListSkeleton
