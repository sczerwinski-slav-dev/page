import {baseUrl, pagesPath} from '../config/api.tsx'
import PageStub from '../types/PageStub.tsx'
import {fetchJson} from '../utils/fetch.tsx'

export async function getPages(): Promise<PageStub[]> {
  return fetchJson(`${baseUrl}${pagesPath}`)
}
