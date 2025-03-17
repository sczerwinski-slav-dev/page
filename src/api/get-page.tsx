import {baseUrl, pagesPath} from '../config/api.tsx'
import Page from '../types/Page.tsx'
import {fetchJson} from '../utils/fetch.tsx'

export async function getPage(pageId: string): Promise<Page> {
  return fetchJson(`${baseUrl}${pagesPath}/${pageId}`)
}
