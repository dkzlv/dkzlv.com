import { derived } from 'svelte/store';
import { locale } from 'svelte-i18n';

const apiPort = process.env.API_PORT ? `:${process.env.API_PORT}` : '';
export const rootApiPath = `${process.env.API_SCHEME}://${process.env.API_HOST}${apiPort}`;

const sitePort = process.env.SITE_PORT ? `:${process.env.SITE_PORT}` : '';
export const rootSitePath = `${process.env.SITE_SCHEME}://${process.env.SITE_HOST}${sitePort}`;

export const rootStaticPath = `${rootSitePath}/${process.env.ROOT_STATIC_PATH}`,
  staticPath = `/${process.env.ROOT_STATIC_PATH}`;

const baseSpecialsPath = derived(locale, $locale => `/${$locale}/specials`);

export const fingerprintPath = derived(baseSpecialsPath, $base => `${$base}/fingerprint`),
  appRespectData = derived(baseSpecialsPath, $base => `${$base}/safe-apps`);

const leakTypeFactory = (type: string) =>
  derived(leaksPath, $base => (org: string) => `${$base}/${type}/${org}`);
export const leaksPath = derived(locale, $locale => `/${$locale}/leaks`),
  orgPath = leakTypeFactory('org'),
  locationPath = leakTypeFactory('location'),
  tagPath = leakTypeFactory('tag');
