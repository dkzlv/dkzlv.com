const apiPort = process.env.API_PORT ? `:${process.env.API_PORT}` : '';
export const rootApiPath = `${process.env.API_SCHEME}://${process.env.API_HOST}${apiPort}`;

const sitePort = process.env.SITE_PORT ? `:${process.env.SITE_PORT}` : '';
export const rootSitePath = `${process.env.SITE_SCHEME}://${process.env.SITE_HOST}${sitePort}`;

export const rootStaticPath = `${rootSitePath}/${process.env.ROOT_STATIC_PATH}`;
export const staticPath = `/${process.env.ROOT_STATIC_PATH}`;
