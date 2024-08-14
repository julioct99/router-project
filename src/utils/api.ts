export const addQueryParamToUrl = (url: string, key: string, value: string) => {
  const urlObject = new URL(url)
  urlObject.searchParams.set(key, value)
  return urlObject.toString()
}
