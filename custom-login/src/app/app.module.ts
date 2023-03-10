/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
} from '@okta/okta-angular';

import sampleConfig from './app.config';
async function onAuthRequired (oktaAuth, injector) {
  oktaAuth.session.exists().then(
    async (res) => {
      if(res) {
        await oktaAuth.token.getWithoutPrompt()
        .then(async (res) => {
          oktaAuth.tokenManager.setTokens(res.tokens);
        })
        .catch(function(err) {
          console.log(err);
        });
      } else {
        redirectToLoginPage();
      }
    }
  )
}

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import redirectToLoginPage from './util/redirectToLoginPage';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ OktaAuthGuard ],
    data: {
      onAuthRequired
    }
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [ OktaAuthGuard ],
    data: {
      onAuthRequired
    }
  },
];

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    OktaAuthModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: sampleConfig.oidc },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
