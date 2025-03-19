import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

function PostCardSkeleton() {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"><Skeleton width='50%' /></Typography>
          <Typography sx={{ mb: 1.5 }}><Skeleton width='30%' /></Typography>
          <Stack direction="row" spacing={1} sx={{ my: 1 }}>
            <Skeleton width='10%' />
            <Skeleton width='10%' />
          </Stack>
          <Typography variant='body1'><Skeleton width='50%' /></Typography>
          <Typography variant='body1'><Skeleton width='30%' /></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PostCardSkeleton
