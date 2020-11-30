export type LeakMetaFromFile = {
  organization: string;
  tags: string;
  spread: string;
  potentialVictims?: string;
  source: string;

  added: string;

  start?: string;
  end: string;
};

export type BaseLeakMeta = {
  organization: string;
  tags: string[];
  spread: string[];
  potentialVictims?: string;
  potentialVictimsSort?: number;
  source: string;

  added: number;

  start?: number;
  end: number;
};

type LeakContent = { slug: string; title: string; content: string };

export type Leak = {
  content: { [locale: string]: LeakContent };
  meta: BaseLeakMeta;
};

export type LeakInComponent = {
  content: LeakContent;
  meta: BaseLeakMeta;
};

type ContentByLocale = { [locale: string]: { slug: string; title: string; description: string } };
export type Tag = {
  id: string;
  content: ContentByLocale;
};
export type Org = {
  id: string;
  img?: string;
  site?: string;
  content: ContentByLocale;
};
export type Location = {
  id: string;
  emoji: string;
  content: ContentByLocale;
};
