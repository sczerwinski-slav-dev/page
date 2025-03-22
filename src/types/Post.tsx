interface Post {
  id: string
  title: string
  abstract: string
  date: string
  content: string
  draft: boolean
  categories: string[]
  tags: string[]
  thumbnail: string | null
  url: string
}

export default Post
