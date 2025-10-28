import en from "./en"
import ptbr from "./ptbr"

const languages = {
  en,
  ptbr,
}

export type LangKey = keyof typeof languages

let currentLang: LangKey = "ptbr" // idioma padrão

export function setLanguage(lang: LangKey) {
  currentLang = lang
}

export function t(path: string): string {
  const keys = path.split(".")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = languages[currentLang]
  for (const key of keys) {
    result = result?.[key]
    if (!result) return path // se não achar a chave, retorna a string original
  }
  return result
}
