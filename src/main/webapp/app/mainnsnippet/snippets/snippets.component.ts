import {Component, OnDestroy, OnInit} from "@angular/core";
import {Snippet} from "app/mainnsnippet/model/snippet.model";
import {SnippetService} from "app/mainnsnippet/service/snippet.service";
import {UserService} from "app/core/user/user.service";
import {Account} from "app/core/user/account.model";
import {Subscription} from "rxjs";
import {AccountService} from "app/core/auth/account.service";

@Component({
  selector: 'jhi-snippets',
  templateUrl: './snippets.component.html'
})
export class SnippetsComponent implements OnInit, OnDestroy {
  public snippets: Snippet[] | null = null;
  account: Account | null = null;
  authSubscription?: Subscription;


  constructor(private snippetService: SnippetService, private userService: UserService, private accountService: AccountService,) {
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.findAllSnippet();
  }

  trackIdentity(index: number, item: Snippet): any {
    return item.id;
  }

  public findAllSnippet(): void {
    this.snippetService
      .getAllByUserId((this.account ? this.account.id.toString() : ''))
      .subscribe((res) => {
        this.snippets = res;
      });
  }
}
