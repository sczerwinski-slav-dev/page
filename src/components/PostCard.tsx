import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import {NavLink} from 'react-router'
import PostStub from '../types/PostStub.tsx'
import ReactMarkdown from 'react-markdown'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import {formatDate} from '../utils/date.tsx'
import {postsPath} from '../config/site.tsx'

interface PostCardProps {
  post: PostStub
}

function PostCard(props: PostCardProps) {
  const {post} = props

  return (
    <Card>
      <CardActionArea component={NavLink} to={`/${postsPath}/${post.id}`}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {formatDate(post.date)}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ my: 1 }}>
            {post.categories.map(category => (
              <Chip key={category} label={category} color="primary" size="small" />
            ))}
            {post.tags.map(tag => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Stack>
          <ReactMarkdown>{post.abstract}</ReactMarkdown>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PostCard
