export async function fetchJson<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(`Request to ${response.url} returned ${response.status.toString()}`)
  }) as Promise<T>
}
