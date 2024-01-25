export default function api<T>(url: string = "https://www.balldontlie.io/api/v1/games/1"): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
}