import PostStub from '../types/PostStub.tsx'

export function extractCategories(posts: PostStub[]): string[] {
  const categories = posts.flatMap((post) => post.categories)
  return [...new Set(categories)]
}

export function extractTags(posts: PostStub[]): string[] {
  const tags = posts.flatMap((post) => post.tags)
  return [...new Set(tags)]
}

export function extractCategoriesAndTags(posts: PostStub[]): string[] {
  const items = [...extractCategories(posts), ...extractTags(posts)]
  return [...new Set(items)]
}

export function hasCategoryOrTag(post: PostStub, value: string): post is PostStub {
  return new Set([...post.categories, ...post.tags]).has(value)
}

export function filterByCategoriesAndTags(posts: PostStub[], filter: string[]): PostStub[] {
  if (filter.length) {
    return posts.filter(
      (post) => filter.some((value) => hasCategoryOrTag(post, value))
    )
  }
  return posts
}
