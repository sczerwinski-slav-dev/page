import {baseUrl, postsPath} from '../config/api.tsx'
import PostStub from '../types/PostStub.tsx'
import {fetchJson} from '../utils/fetch.tsx'

export async function getPosts(): Promise<PostStub[]> {
  return fetchJson(`${baseUrl}${postsPath}`)
}
