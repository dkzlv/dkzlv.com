import Polyglot from 'node-polyglot'
import { langStore } from '../store'
import phrases from './client.json'

let polyglot = new Polyglot({ interpolation: { prefix: '{{', suffix: '}}' } })
langStore.subscribe(newLang => {
  polyglot.locale(newLang)
  polyglot.extend(phrases[newLang])
})
const t = (...args) => polyglot.t(...args)

export default t
