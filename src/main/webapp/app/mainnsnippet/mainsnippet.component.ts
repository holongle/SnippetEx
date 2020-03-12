import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {LoginModalService} from 'app/core/login/login-modal.service';
import {AccountService} from 'app/core/auth/account.service';
import {Account} from 'app/core/user/account.model';
import {Router} from '@angular/router';
import {LoginService} from 'app/core/login/login.service';

@Component({
  selector: 'jhi-main-snippet',
  templateUrl: './mainsnippet.component.html',
  styleUrls: ['mainsnippet.scss']
})
export class MainsnippetComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private accountService: AccountService, private loginModalService: LoginModalService) {
  }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  logout(): void {
    //this.snippetsComponent.snippets = null;
    //this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['/snippet']);
  }


}
