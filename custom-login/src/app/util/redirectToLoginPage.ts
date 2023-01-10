import sampleConfig from '../app.config';
const { CLIENT_ID } = process.env;

export default function () {
    if(localStorage.getItem('lang')) {
        sampleConfig.default_lang = localStorage.getItem('lang')
    }
    console.log("ceva", `${CLIENT_ID}`)
    window.location.href = "https://custom-login.squareballapps.com"
     + "?lang=" + sampleConfig.default_lang
     + "&clientId=" + `${CLIENT_ID}`
     + "&redirectUri=" + sampleConfig.redirectUriAfterLogin;
}