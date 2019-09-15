const isProd = process.env.NODE_ENV === 'production'

export const basePath = isProd
  ? 'https://api.dkzlv.ru'
  : 'http://localhost:8080'
