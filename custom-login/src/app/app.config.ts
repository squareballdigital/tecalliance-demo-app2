const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env;
const USE_INTERACTION_CODE = process.env.USE_INTERACTION_CODE || false;

export default {
  oidc: {
    clientId: `${CLIENT_ID}`,
    issuer: `${ISSUER}`,
    redirectUri: 'https://tecalliance-demo-app2.squareballapps.com/login/callback',
    scopes: ['openid', 'profile', 'email', 'phone'],
    testing: {
      disableHttpsCheck: `${OKTA_TESTING_DISABLEHTTPSCHECK}`
    },
    useInteractionCodeFlow: `${USE_INTERACTION_CODE}`,
  },
  resourceServer: {
    messagesUrl: 'https://tecalliance-demo-app2.squareballapps.com/api/messages',
  },
  default_lang: 'en',
  redirectUriAfterLogin: 'https://tecalliance-demo-app2.squareballapps.com'
};
