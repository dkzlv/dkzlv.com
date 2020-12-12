import { derived } from 'svelte/store';
import { locale } from 'svelte-i18n';

const apiPort = process.env.API_PORT ? `:${process.env.API_PORT}` : '';
export const rootApiPath = `${process.env.API_SCHEME}://${process.env.API_HOST}${apiPort}`;

const sitePort = process.env.SITE_PORT ? `:${process.env.SITE_PORT}` : '';
export const rootSitePath = `${process.env.SITE_SCHEME}://${process.env.SITE_HOST}${sitePort}`;

export const staticPath = `/${process.env.ROOT_STATIC_PATH}`,
  rootStaticPath = `${rootSitePath}${staticPath}`;

export const mainPath = derived(locale, $locale => `/${$locale}`);

const baseSpecialsPath = derived(mainPath, $base => `${$base}/specials`);

export const fingerprintPath = derived(baseSpecialsPath, $base => `${$base}/fingerprint`),
  appRespectData = derived(baseSpecialsPath, $base => `${$base}/safe-apps`);

const leakTypeFactory = (type: string) =>
  derived(leaksPath, $base => (org: string) => `${$base}/${type}/${org}`);
export const leaksPath = derived(locale, $locale => `/${$locale}/leaks`),
  leakPath = derived(leaksPath, $base => (slug: string) => `${$base}/${slug}`),
  orgPath = leakTypeFactory('org'),
  locationPath = leakTypeFactory('location'),
  tagPath = leakTypeFactory('tag');
