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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Subscription } from 'rxjs';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import redirectToLoginPage from './util/redirectToLoginPage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  isAuthenticated: boolean;

  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;

  constructor(
    public oktaAuth: OktaAuthService,
    private ccService: NgcCookieConsentService
    ) {
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }
  
  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();

    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {});

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {});
  }

  async login() {
    redirectToLoginPage();
  }

  async logout() {
    await this.oktaAuth.signOut();
  }

  ngOnDestroy() {
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
  }
}
