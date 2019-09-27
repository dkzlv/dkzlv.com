import { writable } from 'svelte/store'

export const langStore = writable()

export const setCurrentLang = () => {
  let rawLang = ''
  if (typeof navigator !== 'undefined') {
    rawLang = (navigator.language || navigator.userLanguage).slice(0, 2)
  }
  // Only support two langs for now
  const lang = rawLang === 'ru' ? rawLang : 'en'
  langStore.set(lang)
  return lang
}
