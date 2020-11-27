export async function commonPreload(
  fetch: (path: string) => Promise<any>,
  { lang, slug }: { lang: string; slug: string },
) {
  const res = await fetch(`/${lang}/${slug}.json`),
    data = await res.json();

  if (res.status === 200) return { post: data };
  else this.error(res.status, data.message);
}
