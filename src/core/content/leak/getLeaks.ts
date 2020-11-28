import { parse } from 'date-fns';
import slugify from '@sindresorhus/slugify';

import { getFilesContent } from 'core/content/common/getFilesContent';
import { convertLeak } from './convertLeak';
import { Leak } from './types';
import { abbreviateNumber } from 'utils/abbreviateNumber';

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

const getLeakByFileContent = (rawFileContent: string): Leak => {
  const { content, meta } = convertLeak(rawFileContent),
    { tags, added, start, end, potentialVictims, spread, ...rest } = meta;

  return {
    content: Object.entries(content).reduce(
      (acc, [locale, contentData]) => (
        (acc[locale] = {
          ...contentData,
          slug: slugify(contentData.title),
        }),
        acc
      ),
      {} as Leak['content'],
    ),
    meta: {
      ...rest,
      ...getPrintValueForVictims(meta.potentialVictims),
      spread: spread.split(', '),
      tags: tags.split(', '),
      added: parse(added, dateFormat, refDate).getTime(),
      end: parse(end, dateFormat, refDate).getTime(),
      start: start ? parse(start, dateFormat, refDate).getTime() : undefined,
    },
  };
};

export const getLeaks = () =>
  getFilesContent(rootLeakSubpath)
    .map(({ fileContent }) => getLeakByFileContent(fileContent))
    .sort((leak1, leak2) => leak2.meta.end - leak1.meta.end);
