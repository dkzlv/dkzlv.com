const isProd = process.env.NODE_ENV === 'production'

export const scheme = isProd ? 'https' : 'http'
export const host = isProd ? 'dkzlv.com' : 'blog'
export const clientPort = isProd ? '' : ':3000'
export const backPort = isProd ? '' : ':8080'

export const baseBackPath = `${scheme}://api.${host}${backPort}`
export const baseClientPath = `${scheme}://${host}${clientPort}`
