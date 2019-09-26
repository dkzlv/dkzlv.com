import Polyglot from 'node-polyglot'
const client = require('./client.json')
const back = require('./back.json')

let polyglot = new Polyglot({ interpolation: { prefix: '{{', suffix: '}}' } })
// @ts-ignore
const t = (...args: any[]) => polyglot.t(...args)

export const setLang = (lang: string) => {
  polyglot.locale(lang)
  polyglot.extend(client[lang])
  polyglot.extend(back[lang])
}

export default t
