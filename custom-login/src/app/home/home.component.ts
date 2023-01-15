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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import redirectToLoginPage from '../util/redirectToLoginPage';
import sampleConfig from '../app.config';
import { SupportedLanguage } from '../lang/supported-languages';
import { getCurrentLanguage, getTheSupportedLanguages } from '../lang/util';

interface ResourceServerExample {
  label: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  resourceServerExamples: Array<ResourceServerExample>;
  userName: string;
  selectedLang: string = "en";

  showDropDown: string = "none";
  languages: SupportedLanguage[] = getTheSupportedLanguages();
  currentLanguage: SupportedLanguage = getCurrentLanguage(localStorage.getItem("lang") ? localStorage.getItem("lang") : navigator.language);

  constructor(public oktaAuth: OktaAuthService,
    private route: ActivatedRoute) {
    this.resourceServerExamples = [
      {
        label: 'Node/Express Resource Server Example',
        url: 'https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server',
      },
      {
        label: 'Java/Spring MVC Resource Server Example',
        url: 'https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server',
      },
    ];
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }


  async ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if(params.lang) {
        this.currentLanguage = getCurrentLanguage(params.lang)
        localStorage.setItem("lang", this.currentLanguage.languageIndex)
      }
    })
    
    if(this.oktaAuth.token) {
      await this.oktaAuth.token.getWithoutPrompt()
      .then(async (res) => {
        this.oktaAuth.tokenManager.setTokens(res.tokens);
      })
      .catch(function(err) {
        console.log(err);
      });
    }

    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.isAuthenticated) {
      const userClaims = await this.oktaAuth.getUser();
      this.userName = userClaims.name;
    }
  }

  async login() {
    redirectToLoginPage(this.currentLanguage.languageIndex)
  }

  show() {
    this.showDropDown = this.showDropDown === "none" ? "block" : "none";
  }

  changeCurrentLang(lang: SupportedLanguage) {
    this.currentLanguage = lang;
    localStorage.setItem("lang", lang.languageIndex);
    this.show();
  }
}
