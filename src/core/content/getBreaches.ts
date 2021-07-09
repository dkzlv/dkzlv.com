import slugify from 'slugify';
import { parse } from 'date-fns';
import { abbreviateNumber } from '$utils/abbreviateNumber';

let cachedBreaches: Breach[] | null = null;

export function getBreaches() {
  if (!cachedBreaches) {
    const allImported = Object.entries(
      import.meta.globEager('../../routes/[lang]/breaches/case/**/index.svx'),
    ) as unknown as [string, { metadata: BreachFromFile }][];

    cachedBreaches = allImported.map(([path, p]) => {
      const { organization, tags, locations, potentialVictims: _victims, ...meta } = p.metadata,
        slug = getSlugFromPath(path);

      let potentialVictims: string;
      if (typeof _victims == 'number' || !_victims.startsWith('>'))
        potentialVictims = abbreviateNumber(+_victims);
      else {
        const abbr = abbreviateNumber(+_victims.slice(1));
        potentialVictims = `>${abbr}`;
      }

      return {
        ...meta,
        slug,
        organization: slugData(organization),
        locations: locations.map(slugData),
        tags: tags.map(slugData),
        potentialVictims,
        start: meta.start ? parseDate(meta.start) : undefined,
        end: parseDate(meta.end),
        added: parseDate(meta.added),
      };
    });
  }

  return cachedBreaches;
}

function getSlugFromPath(path: string) {
  const paths = path.split('/');
  return paths[paths.length - 2]!;
}
function parseDate(dt: string) {
  return parse(dt, 'dd.MM.yyyy', new Date(0)).getTime();
}
function slugData(data: string): SluggedData {
  return { slug: slugify(data, { lower: true }), display: data };
}

type BreachFromFile = CommonBreach & {
  start?: string;
  end: string;
  added: string;
  organization: string;
  locations: string[];
  tags: string[];
};

type SluggedData = { display: string; slug: string };
export type Breach = CommonBreach & {
  start?: number;
  end: number;
  added: number;

  organization: SluggedData;
  locations: SluggedData[];
  tags: SluggedData[];

  slug: string;
};

type CommonBreach = {
  lang: string;
  title: string;
  potentialVictims: string | number;
  source: string;
  isCorporationbreach: boolean;
  isEmpty: boolean;
};
