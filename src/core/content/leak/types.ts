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
  spread: 'us' | 'un' | string;
  potentialVictims?: string;
  potentialVictimsSort?: number;
  source: string;

  added: Date;

  start?: Date;
  end: Date;
};

export type Leak = {
  content: { [locale: string]: { slug: string; title: string; content: string } };
  meta: BaseLeakMeta;
};
