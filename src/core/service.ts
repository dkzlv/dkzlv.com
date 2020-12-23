import { rootApiPath } from './paths';

export const request = (method: string, path: string, data: Object) =>
  fetch(`${rootApiPath}/${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
