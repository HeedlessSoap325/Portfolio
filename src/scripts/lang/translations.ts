import langs  from "../../assets/langs.json";

export const translations = langs;
export type Language = keyof typeof langs
export type TranslationKey = keyof typeof langs["en"]