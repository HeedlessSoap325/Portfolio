import React, { createContext, useContext, ReactNode } from "react"
import { translations, Language, TranslationKey } from "./translations.ts"

interface TranslationContextValue {
    translate: (key: TranslationKey) => string
    language: Language
}

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined)

interface TranslationProviderProps {
    language: Language
    children: ReactNode
}

export function useTranslation(): TranslationContextValue {
    const context = useContext(TranslationContext)
    if (!context) {
        throw new Error(
            "useTranslation must be used within a TranslationProvider"
        )
    }
    return context
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({language, children}) => {
    function translate(key: TranslationKey): string {
        return translations[language][key]
    }

    return (
        <TranslationContext.Provider value={{ translate, language }}>
            {children}
        </TranslationContext.Provider>
    )
}