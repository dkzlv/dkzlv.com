import { parse } from 'date-fns';

let cachedPosts: Post[] | null = null;

export const getPosts = () => {
  if (!cachedPosts) {
    const allImported = Object.entries(
      import.meta.globEager('../../routes/[lang]/posts/**/index.svx'),
    ) as unknown as [string, { metadata: PostFromFile }][];

    cachedPosts = allImported
      .map(([path, p]) => {
        const meta = p.metadata,
          slug = getSlugFromPath(path);

        return {
          ...meta,
          slug,
          date: parse(meta.date, 'dd.MM.yyyy', new Date(0)).getTime(),

          series: meta.series
            ? meta.series.map(seriesSlug => {
                if (seriesSlug == '') return getSeriesData(slug, meta);

                const found = allImported.find(([path]) => {
                  const currentSlug = getSlugFromPath(path);
                  return currentSlug === seriesSlug;
                });
                if (!found) throw new Error(`Unknown refference ${seriesSlug} from post ${slug}`);
                return getSeriesData(seriesSlug, found[1].metadata);
              })
            : undefined,

          description: changeSlashN(meta.description),
          emailCollectorMessage: changeSlashN(meta.emailCollectorMessage || ''),
        };
      })
      .sort((p1, p2) => p2.date - p1.date);
  }

  return cachedPosts;
};

function changeSlashN(data: string) {
  return data.replace(/\\n/g, '<br />');
}
function getSlugFromPath(path: string) {
  const paths = path.split('/');
  return paths[paths.length - 2]!;
}
function getSeriesData(slug: string, data: PostFromFile): BooleanCheck<ArrayItem<Post['series']>> {
  const { lang, title, description, announced } = data;

  return {
    lang,
    slug,
    title,
    description: changeSlashN(description),
    announced,
  };
}

type PostFromFile = CommonPost & {
  date: string;

  // Array of slugs
  series?: string[];
};

export type Post = CommonPost & {
  date: number;
  slug: string;

  // Array of slugs
  series?: {
    lang: string;
    slug: string;
    title: string;
    description: string;
    announced?: boolean;
  }[];

  // Do not provide yet
  // readTime: number;
};

type CommonPost = {
  lang: string;
  title: string;
  description: string;

  // Means this post is non existant yet
  announced?: boolean;

  emailCollectorMessage?: string;
};
