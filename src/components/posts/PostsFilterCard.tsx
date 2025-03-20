import PostsFilter, {PostsFilterProps} from './PostsFilter.tsx'
import CollapsibleCard from '../containers/CollapsibleCard.tsx'

type PostsFilterCardProps = PostsFilterProps

function PostsFilterCard(props: PostsFilterCardProps) {
  return (
    <CollapsibleCard caption='Filter posts'>
      <PostsFilter {...props} />
    </CollapsibleCard>
  )
}

export default PostsFilterCard
