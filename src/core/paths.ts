import { derived } from 'svelte/store';
import { locale } from 'svelte-i18n';

const apiPort = process.env.API_PORT ? `:${process.env.API_PORT}` : '';
export const rootApiPath = `${process.env.API_SCHEME}://${process.env.API_HOST}${apiPort}`;

const sitePort = process.env.SITE_PORT ? `:${process.env.SITE_PORT}` : '';
export const rootSitePath = `${process.env.SITE_SCHEME}://${process.env.SITE_HOST}${sitePort}`;

export const mainPath = derived(locale, $locale => `/${$locale}`),
  postPath = derived(mainPath, $path => (slug: string) => `${$path}/posts/${slug}`),
  rssPath = derived(mainPath, $path => `${$path}/rss`);

const baseSpecialsPath = derived(mainPath, $base => `${$base}/specials`);

export const fingerprintPath = derived(baseSpecialsPath, $base => `${$base}/fingerprint`);

const breachTypeFactory = (type: string) =>
  derived(breachesPath, $base => (slug: string) => `${$base}?${type}=${slug}`);
export const breachesPath = derived(locale, $locale => `/${$locale}/breaches`),
  breachPath = derived(breachesPath, $base => (slug: string) => `${$base}/case/${slug}`),
  orgPath = breachTypeFactory('org'),
  locationPath = breachTypeFactory('location'),
  tagPath = breachTypeFactory('tag');

export const repoUrl = 'https://github.com/dkzlv/dkzlv.com',
  getLicenseUrl = (filename: string) => `${repoUrl}/blob/master/${filename}`;
