import { ui, defaultLang, showDefaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	const localizedUI: Record<string, string> = ui[lang];
	return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
		return key in localizedUI ? localizedUI[key] : ui[defaultLang][key];
	};
}

/** Rewrites a root-relative path (e.g. "/about") to its localized equivalent. */
export function useTranslatedPath(lang: Lang) {
	return function translatePath(path: string, l: Lang = lang): string {
		return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
	};
}
