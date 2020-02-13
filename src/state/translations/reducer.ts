import { Translations, translations } from "src/data";

export type TranslationsState = {
    readonly translations: Translations;
};

export const defaultState: TranslationsState = {
    translations: translations,
};

export const reducer = (state: TranslationsState = defaultState): TranslationsState => {
    return state;
};
