import {baseUrl, postsPath} from '../config/api.tsx'
import Post from '../types/Post.tsx'
import {fetchJson} from '../utils/fetch.tsx'

export async function getPost(postId: string): Promise<Post> {
  return fetchJson(`${baseUrl}${postsPath}/${postId}`)
}
