interface Post {
  id: string
  title: string
  abstract: string
  date: string
  content: string
  draft: boolean
  categories: string[]
  tags: string[]
  url: string
}

export default Post
