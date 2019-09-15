import { basePath } from './config'

const request = (method, path, data) =>
  fetch(`${basePath}/${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

export default request
