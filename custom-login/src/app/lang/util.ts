import { supportedLanguages, defaultLang, SupportedLanguage } from "./supported-languages";


export function getTheSupportedLanguages(): SupportedLanguage[]{
    return supportedLanguages.filter((lang) => !lang.unsupported);
}

export function getCurrentLanguage(langIndex: string): SupportedLanguage {
    // if(localStorage.getItem("lang")) {
    //     langIndex = localStorage.getItem("lang")
    // }
    langIndex = langIndex.toLowerCase();
    const languages = getTheSupportedLanguages();

    for(let i = 0; i < languages.length; i++) {
        if((languages[i].browserIndexCode && languages[i].browserIndexCode === langIndex) 
            || languages[i].languageIndex === langIndex) {
                return languages[i]
        }
    }

    for(let i = 0; i < languages.length; i++) {
        if(langIndex.includes(languages[i].languageIndex)
            || langIndex.includes(languages[i].oktaLangIndex)) {
                return languages[i]
        }
    }
    return defaultLang;
}

export function updateOtherLanguages(oktaConfig: any) {
    oktaConfig.i18n.en = {}
    oktaConfig.i18n.en["primaryauth.username.placeholder"] = "Email";
    oktaConfig.i18n.de = {};
    oktaConfig.i18n.de["primaryauth.username.placeholder"] = "Email";
    oktaConfig.i18n.es = {};
    oktaConfig.i18n.es["primaryauth.username.placeholder"] = "Email";
    oktaConfig.i18n.fr = {};
    oktaConfig.i18n.fr["primaryauth.username.placeholder"] = "E-mail";
    oktaConfig.i18n.pt_BR = {};
    oktaConfig.i18n.pt_BR["primaryauth.username.placeholder"] = "E-mail";
    oktaConfig.i18n.zh_CN = {};
    oktaConfig.i18n.zh_CN["primaryauth.username.placeholder"] = "电子邮件";
    oktaConfig.i18n.cs = {};
    oktaConfig.i18n.cs["primaryauth.username.placeholder"] = "E-mailem";
    oktaConfig.i18n.da = {};
    oktaConfig.i18n.da["primaryauth.username.placeholder"] = "E-mail";
    oktaConfig.i18n.nl = {};
    oktaConfig.i18n.nl["primaryauth.username.placeholder"] = "E-mail";
    oktaConfig.i18n.fi = {};
    oktaConfig.i18n.fi["primaryauth.username.placeholder"] = "Sähköposti";
    oktaConfig.i18n.el = {};
    oktaConfig.i18n.el["primaryauth.username.placeholder"] = "ΗΛΕΚΤΡΟΝΙΚΗ ΔΙΕΥΘΥΝΣΗ";
    oktaConfig.i18n.hu = {};
    oktaConfig.i18n.hu["primaryauth.username.placeholder"] = "Email";
    oktaConfig.i18n.it = {};
    oktaConfig.i18n.it["primaryauth.username.placeholder"] = "E-mail";
    oktaConfig.i18n.ja = {};
    oktaConfig.i18n.ja["primaryauth.username.placeholder"] = "Eメール";
    oktaConfig.i18n.ko = {};
    oktaConfig.i18n.ko["primaryauth.username.placeholder"] = "이메일";
    oktaConfig.i18n.ms = {};
    oktaConfig.i18n.ms["primaryauth.username.placeholder"] = "E-mel";
    oktaConfig.i18n.nb = {};
    oktaConfig.i18n.nb["primaryauth.username.placeholder"] = "E-post";
    oktaConfig.i18n.pl = {};
    oktaConfig.i18n.pl["primaryauth.username.placeholder"] = "E-mail";
    oktaConfig.i18n.ro = {};
    oktaConfig.i18n.ro["primaryauth.username.placeholder"] = "E-mail";
    oktaConfig.i18n.ru = {};
    oktaConfig.i18n.ru["primaryauth.username.placeholder"] = "Эл. адрес";
    oktaConfig.i18n.sv = {};
    oktaConfig.i18n.sv["primaryauth.username.placeholder"] = "E-post";
    oktaConfig.i18n.th = {};
    oktaConfig.i18n.th["primaryauth.username.placeholder"] = "อีเมล";
    oktaConfig.i18n.tr = {};
    oktaConfig.i18n.tr["primaryauth.username.placeholder"] = "E-posta";
    oktaConfig.i18n.uk = {};
    oktaConfig.i18n.uk["primaryauth.username.placeholder"] = "Електронна пошта";
    oktaConfig.i18n.vi = {};
    oktaConfig.i18n.vi["primaryauth.username.placeholder"] = "E-mail";
    return oktaConfig;
}


