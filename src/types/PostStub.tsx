interface PostStub {
  id: string
  title: string
  abstract: string
  date: string
  draft: boolean
  categories: string[]
  tags: string[]
  thumbnail: string | null
  url: string
}

export default PostStub
