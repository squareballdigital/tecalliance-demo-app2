export interface SupportedLanguage {
    oktaLangIndex: string,
    languageIndex: string,
    name: string,
    dir?: string,
    unsupported?: boolean,
    browserIndexCode?: string,
}

export const defaultLang: SupportedLanguage = {
    "oktaLangIndex": "en",
    "name": "English",
    "unsupported": false,
    "languageIndex": "en"
}

export const supportedLanguages: SupportedLanguage[] = [
    {
      "oktaLangIndex": "ar",
      "name": "العربية (Arabic)",
      "dir": "rtl",
      "unsupported": true,
      "languageIndex": "ar"
    },
    {
      "oktaLangIndex": "pt_BR",
      "name": "Português (Brazilian Portuguese)",
      "unsupported": false,
      "languageIndex": "qc",
      "browserIndexCode": "pt-br"
    },
    {
      "oktaLangIndex": "bg",
      "name": "български език (Bulgarian)",
      "unsupported": true,
      "languageIndex": "bg"
    },
    {
      "oktaLangIndex": "zh_CN",
      "name": "简体中文 (Chinese)",
      "unsupported": false,
      "languageIndex": "zh"
    },
    {
      "oktaLangIndex": "hr",
      "name": "Hrvatski (Croatian)",
      "unsupported": true,
      "languageIndex": "hr"
    },
    {
      "oktaLangIndex": "cs",
      "name": "Čeština (Czech)",
      "unsupported": false,
      "languageIndex": "cs"
    },
    {
      "oktaLangIndex": "da",
      "name": "Dansk (Danish)",
      "unsupported": false,
      "languageIndex": "da"
    },
    {
      "oktaLangIndex": "nl_NL",
      "name": "Nederlands (Dutch)",
      "unsupported": false,
      "languageIndex": "nl"
    },
    {
      "oktaLangIndex": "en",
      "name": "English (AUS)",
      "unsupported": false,
      "languageIndex": "qb",
      "browserIndexCode": "en-au"
    },

    {
      "oktaLangIndex": "en",
      "name": "English (GB)",
      "unsupported": false,
      "languageIndex": "en",
      "browserIndexCode": "en-gb"
    },
    {
      "oktaLangIndex": "en",
      "name": "English (USA)",
      "unsupported": false,
      "languageIndex": "qa",
      "browserIndexCode": "en-us"
    },
    {
      "oktaLangIndex": "et",
      "name": "Eesti (Estonian)",
      "unsupported": true,
      "languageIndex": "et"
    },
    {
      "oktaLangIndex": "fi",
      "name": "Suomi (Finnish)",
      "unsupported": false,
      "languageIndex": "fi"
    },
    {
      "oktaLangIndex": "fr",
      "name": "Français (French)",
      "unsupported": false,
      "languageIndex": "fr"
    },
    {
      "oktaLangIndex": "de",
      "name": "Deutsch (German)",
      "unsupported": false,
      "languageIndex": "de"
    },
    {
      "oktaLangIndex": "el",
      "name": "ελληνικά (Greek)",
      "unsupported": false,
      "languageIndex": "el"
    },
    {
      "oktaLangIndex": "he",
      "name": "עברית (Hebrew)",
      "dir": "rtl",
      "unsupported": true,
      "languageIndex": "he"
    },
    {
      "oktaLangIndex": "hu",
      "name": "magyar (Hungarian)",
      "unsupported": false,
      "languageIndex": "hu"
    },
    {
      "oktaLangIndex": "it",
      "name": "Italiano (Italian)",
      "unsupported": false,
      "languageIndex": "it"
    },
    {
      "oktaLangIndex": "ja",
      "name": "日本語 (Japanese)",
      "unsupported": false,
      "languageIndex": "ja"
    },
    {
      "oktaLangIndex": "ko",
      "name": "한국어 (Korean)",
      "unsupported": false,
      "languageIndex": "ko"
    },
    {
      "oktaLangIndex": "lv",
      "name": "latviešu (Latvian)",
      "unsupported": true,
      "languageIndex": "lv"
    },
    {
      "oktaLangIndex": "lt",
      "name": "Lietuvių (Lithuanian)",
      "unsupported": true,
      "languageIndex": "lt"
    },
    {
      "oktaLangIndex": "ms",
      "name": "Malay",
      "unsupported": false,
      "languageIndex": "ms"
    },
    {
      "oktaLangIndex": "nb",
      "name": "Norsk Bokmål (Norwegian)",
      "unsupported": false,
      "languageIndex": "no"
    },
    {
      "oktaLangIndex": "pl",
      "name": "język polski (Polish)",
      "unsupported": false,
      "languageIndex": "pl"
    },
    {
      "oktaLangIndex": "pt_BR",
      "name": "Português (Portuguese)",
      "unsupported": false,
      "languageIndex": "pt"
    },
    {
      "oktaLangIndex": "ro",
      "name": "Română (Romanian)",
      "unsupported": false,
      "languageIndex": "ro"
    },
    {
      "oktaLangIndex": "ru",
      "name": "Pу́сский (Russian)",
      "unsupported": false,
      "languageIndex": "ru"
    },
    {
      "oktaLangIndex": "sr",
      "name": "Српски (Serbian)",
      "unsupported": true,
      "languageIndex": "sr"
    },
    {
      "oktaLangIndex": "sk",
      "name": "Slovenčina (Slovak)",
      "unsupported": true,
      "languageIndex": "sk"
    },
    {
      "oktaLangIndex": "sl",
      "name": "Slovenščina (Slovene)",
      "unsupported": true,
      "languageIndex": "sl"
    },
    {
      "oktaLangIndex": "es",
      "name": "Español (Spanish)",
      "unsupported": false,
      "languageIndex": "es"
    },
    {
      "oktaLangIndex": "es",
      "name": "Español (Spanish (MEX))",
      "unsupported": false,
      "languageIndex": "qd",
      "browserIndexCode": "es-mx"
    },
    {
      "oktaLangIndex": "sv",
      "name": "Svenska (Swedish)",
      "unsupported": false,
      "languageIndex": "sv"
    },
    {
      "oktaLangIndex": "th",
      "name": "ภาษาไทย (Thai)",
      "unsupported": false,
      "languageIndex": "th"
    },
    {
      "oktaLangIndex": "tr",
      "name": "Türkçe (Turkish)",
      "unsupported": false,
      "languageIndex": "tr"
    },
    {
      "oktaLangIndex": "uk",
      "name": "українська (Ukrainian)",
      "unsupported": false,
      "languageIndex": "uk"
    },
    {
      "oktaLangIndex": "vi",
      "name": "Tiếng Việt (Vietnamese)",
      "unsupported": false,
      "languageIndex": "vi"
    }
  ];
