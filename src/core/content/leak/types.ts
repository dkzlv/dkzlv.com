type LocalizedContent = { slug: string; title: string; content: string };
type ContentByLocale = { [locale: string]: LocalizedContent };

export type LeakMetaFromFile = {
  organization: string;
  tags: string;
  locations: string;
  potentialVictims?: string;
  source: string;
  isCorporationLeak?: string;

  added: string;

  start?: string;
  end: string;
};

type BaseTag = { id: string };
type BaseOrg = { id: string; img?: string; site?: string };
type BaseLocation = { id: string; emoji: string };

type CommonBackendContentByLocale = { content: ContentByLocale };

export type TagBackend = BaseTag & CommonBackendContentByLocale;
export type OrgBackend = BaseOrg & CommonBackendContentByLocale;
export type LocationBackend = BaseLocation & CommonBackendContentByLocale;

type CommonClientContentByLocale = { content: LocalizedContent };

export type TagClient = BaseTag & CommonClientContentByLocale;
export type OrgClient = BaseOrg & CommonClientContentByLocale;
export type LocationClient = BaseLocation & CommonClientContentByLocale;

export type BaseLeakMeta = {
  potentialVictims?: string;
  potentialVictimsSort?: number;
  source: string;
  isCorporationLeak: boolean;

  added: number;

  start?: number;
  end: number;
};

export type LeakBackend = {
  content: ContentByLocale;
  meta: BaseLeakMeta & {
    organization: OrgBackend;
    tags: TagBackend[];
    locations: LocationBackend[];
  };
};

export type LeakClient = {
  content: LocalizedContent;
  meta: BaseLeakMeta & {
    organization: OrgClient;
    tags: TagClient[];
    locations: LocationClient[];
  };
};
