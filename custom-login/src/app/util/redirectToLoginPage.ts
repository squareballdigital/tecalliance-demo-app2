import sampleConfig from '../app.config';
const { CLIENT_ID } = process.env;

export default function (languageIndex = localStorage.getItem("lang")) {
    window.location.href = "https://tecalliance-custom-login.netlify.app"
     + "?lang=" + languageIndex
     + "&clientId=" + `${CLIENT_ID}`
     + "&redirectUri=" + sampleConfig.redirectUriAfterLogin;
}