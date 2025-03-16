import {baseUrl} from '../config/api.tsx'
import PostStub from '../types/PostStub.tsx'
import {fetchJson} from '../utils/fetch.tsx'

const postsPath = '/posts'

export async function getPosts(): Promise<PostStub[]> {
  return fetchJson(baseUrl + postsPath)
}
