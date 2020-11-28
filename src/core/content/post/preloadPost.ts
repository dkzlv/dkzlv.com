export async function commonPreload(
  fetch: (path: string) => Promise<any>,
  error: (...args: any[]) => any,
  path: string,
  propKey?: string,
) {
  const res = await fetch(path),
    data = await res.json();

  if (res.status === 200) return propKey ? { [propKey]: data } : data;
  else error(res.status, data.message);
}
