import { rootApiPath } from './paths';

const request = (method, path, data) =>
  fetch(`${rootApiPath}/${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

export default request;
