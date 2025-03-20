import * as React from 'react'
import {extractCategoriesAndTags, filterByCategoriesAndTags} from '../../utils/posts.tsx'
import ErrorAlert from '../feedback/ErrorAlert.tsx'
import PostStub from '../../types/PostStub.tsx'
import PostsFilterCard from './PostsFilterCard.tsx'
import PostsList from './PostsList.tsx'
import Stack from '@mui/material/Stack'
import {getPosts} from '../../api/get-posts.tsx'

function PostsListWithFilter() {
  const [posts, setPosts] = React.useState<PostStub[]>([]),
    [filter, setFilter] = React.useState<string[]>([]),
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
      <PostsFilterCard items={extractCategoriesAndTags(posts)} filter={filter} setFilter={setFilter} />
      <PostsList posts={filterByCategoriesAndTags(posts, filter)} loading={!error && !posts.length} />
    </Stack>
  )
}

export default PostsListWithFilter
