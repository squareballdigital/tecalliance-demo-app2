import sampleConfig from '../app.config';
const { CLIENT_ID } = process.env;

export default function () {
    if(localStorage.getItem('lang')) {
        sampleConfig.default_lang = localStorage.getItem('lang')
    }
    window.location.href = "https://custom-login.squareball.de"
     + "?lang=" + sampleConfig.default_lang
     + "&clientId=" + `${CLIENT_ID}`
     + "&redirectUri=" + sampleConfig.redirectUriAfterLogin;
}