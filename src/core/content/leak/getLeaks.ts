import { parse } from 'date-fns';
import slugify from '@sindresorhus/slugify';

import { abbreviateNumber } from '@/utils/abbreviateNumber';

import { getFilesContent } from '@/core/content/common/getFilesContent';
import { convertLeak } from './convertLeak';
import { LeakBackend } from './types';
import { locationsDb, orgsDb, tagsDb } from './db';

const rootLeakSubpath = 'leaks',
  dateFormat = 'dd.MM.yyyy',
  refDate = new Date(0);

const getPrintValueForVictims = (rawData?: string) => {
  if (!rawData) return {};

  if (rawData.startsWith('>')) {
    const number = parseInt(rawData.slice(1));
    return {
      potentialVictims: `${abbreviateNumber(number)}+`,
      potentialVictimsSort: number,
    };
  } else {
    const number = parseInt(rawData);
    return {
      potentialVictims: `${abbreviateNumber(number)}+`,
      potentialVictimsSort: number,
    };
  }
};

const getLeakByFileContent = (rawFileContent: string): LeakBackend => {
  const { content, meta } = convertLeak(rawFileContent),
    {
      organization,
      tags,
      added,
      start,
      end,
      potentialVictims,
      locations,
      isCorporationLeak,
      ...rest
    } = meta;

  return {
    content: Object.entries(content).reduce(
      (acc, [locale, contentData]) => (
        (acc[locale] = {
          ...contentData,
          slug: slugify(contentData.title),
        }),
        acc
      ),
      {} as LeakBackend['content'],
    ),
    meta: {
      ...rest,
      ...getPrintValueForVictims(meta.potentialVictims),
      added: parse(added, dateFormat, refDate).getTime(),
      end: parse(end, dateFormat, refDate).getTime(),
      start: start ? parse(start, dateFormat, refDate).getTime() : undefined,
      isCorporationLeak: !!isCorporationLeak,
      organization: orgsDb.value().find(({ id }) => id == organization)!,
      locations: locations.split(', ').map(id => locationsDb.value().find(loc => loc.id == id)!),
      tags: tags.split(', ').map(id => tagsDb.value().find(loc => loc.id == id)!),
    },
  };
};

export const getLeaks = () =>
  getFilesContent(rootLeakSubpath)
    .map(({ fileContent }) => getLeakByFileContent(fileContent))
    .sort((leak1, leak2) => leak2.meta.end - leak1.meta.end);
