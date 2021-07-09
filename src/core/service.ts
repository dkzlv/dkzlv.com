type RequestParams = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
  path?: string;
  queryParams?: { [param: string]: string };
  headers?: { [header: string]: string };
  data?: Object;
  rootPath?: string;
};

export const get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  del = 'DELETE';

export const request = async <Res = {}>({
  method = get,
  path = '',
  queryParams,
  headers = {},
  data = {},
}: RequestParams) => {
  const fullPath = `/api/${path}${queryParams ? '?' + new URLSearchParams(queryParams) : ''}`,
    body = method === get ? undefined : JSON.stringify(data),
    req = new Request(fullPath, {
      method,
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
    });

  let res: Response, json: Res;
  try {
    res = await fetch(req);
    json = await res.json();
  } catch (e) {
    throw new Error(e.message);
  }

  return { json, res };
};
