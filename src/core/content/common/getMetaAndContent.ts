import yaml from 'js-yaml';

const metaSplitter = (rawFile: string): [string, string] => {
  if (rawFile.slice(0, 3) !== '---') return ['', rawFile];

  const matcher = /\n(\.{3}|-{3})/g,
    metaEnd = matcher.exec(rawFile);

  return metaEnd
    ? [rawFile.slice(0, metaEnd.index), rawFile.slice(matcher.lastIndex)]
    : ['', rawFile];
};

export const getMetaAndContent = <T extends object>(rawFile: string) => {
  const [rawMeta, text] = metaSplitter(rawFile),
    meta = yaml.load(rawMeta) as T;

  return { meta, text };
};
