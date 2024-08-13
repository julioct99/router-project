export const getQueryParamsFromUrl = (url: string) => {
  let queryParams = new URLSearchParams()
  if (url.includes('?')) {
    queryParams = new URLSearchParams(url.split('?')[1])
  }

  return Object.fromEntries(queryParams)
}
