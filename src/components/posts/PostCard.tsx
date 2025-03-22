import {baseUrl, imagesPath} from '../../config/blob.tsx'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {NavLink} from 'react-router'
import PostChips from './PostChips.tsx'
import PostStub from '../../types/PostStub.tsx'
import ReactMarkdown from 'react-markdown'
import Typography from '@mui/material/Typography'
import {formatDate} from '../../utils/date.tsx'
import {postsPath} from '../../config/site.tsx'

interface PostCardProps {
  post: PostStub
}

function PostCard(props: PostCardProps) {
  const {post} = props

  return (
    <Card>
      <CardActionArea component={NavLink} to={`/${postsPath}/${post.id}`}>
        <CardMedia
          component='img'
          image={`${baseUrl}${imagesPath}/${post.thumbnail ?? 'no_thumbnail.png'}`}
          alt={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {post.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {formatDate(post.date)}
          </Typography>
          <PostChips post={post} />
          <ReactMarkdown>{post.abstract}</ReactMarkdown>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PostCard
