import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Snippet} from "app/mainnsnippet/model/snippet.model";
import {SnippetService} from "app/mainnsnippet/service/snippet.service";
import {Account} from "app/core/user/account.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'jhi-snippets',
  templateUrl: './snippets.component.html'
})
export class SnippetsComponent implements OnInit, OnDestroy {
  public snippets: Snippet[] | null = null;
  @Input() account: Account | null = null;


  constructor(private snippetService: SnippetService, private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.snippetService.getAllSnippetsByUserId((this.account ? this.account.id.toString() : ''));
  }

  trackIdentity(index: number, item: Snippet): any {
    return item.id;
  }
}
