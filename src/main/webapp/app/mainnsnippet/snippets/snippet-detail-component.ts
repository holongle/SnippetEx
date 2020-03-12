import {Component, OnDestroy, OnInit} from "@angular/core";
import {Snippet} from "app/mainnsnippet/model/snippet.model";
import {SnippetService} from "app/mainnsnippet/service/snippet.service";
import {UserService} from "app/core/user/user.service";
import {Account} from "app/core/user/account.model";
import {Subscription} from "rxjs";
import {AccountService} from "app/core/auth/account.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'jhi-snippet-detail',
  templateUrl: './snippet-detail-component.html',
  styleUrls: ['snippet-detail.scss']
})
export class SnippetDetailComponent implements OnInit, OnDestroy {
  public snippets: Snippet[] | null = null;
  account: Account | null = null;
  authSubscription?: Subscription;
  snippetId!: string;
  snippet: Snippet | null = null;


  constructor(private route: ActivatedRoute, private snippetService: SnippetService, private userService: UserService, private accountService: AccountService,) {
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.findAllSnippet(params['id']);
    });
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  trackIdentity(index: number, item: Snippet): any {
    return item.id;
  }

  public findAllSnippet(id: string): void {
    this.snippetService
      .getById(id)
      .subscribe((res) => {
        this.snippet = res;
      });
  }
}
