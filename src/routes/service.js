import { baseBackPath } from './config'

const request = (method, path, data) =>
  fetch(`${baseBackPath}/${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

export default request
