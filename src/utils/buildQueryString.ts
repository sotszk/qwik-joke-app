type Query = {
  [key: string]: string | number | boolean | undefined
}

export const buildQueryString = (query: Query) => {
  const queryString = Object.keys(query)
    .filter(key => typeof query[key] !== 'undefined')
    .map((key) => query[key] === true ? key : `${key}=${query[key]}`)
    .join('&')

  return queryString ? `?${queryString}` : ''
}