import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Snippet} from "app/mainnsnippet/model/snippet.model";
import {SnippetService} from "app/mainnsnippet/service/snippet.service";
import {Account} from "app/core/user/account.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'jhi-snippet-detail',
  templateUrl: './snippet-detail-component.html',
  styleUrls: ['snippet-detail.scss']
})
export class SnippetDetailComponent implements OnInit, OnDestroy {
  @Input() account: Account | null = null;
  mode: string | null = null;
  snippet!: Snippet;

  editForm = this.fb.group({
    title: ['', [Validators.maxLength(50)]],
    description: [],
    content: [],
  });

  constructor(private route: ActivatedRoute, private router: Router, private snippetService: SnippetService, private fb: FormBuilder) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (this.route.routeConfig && this.route.routeConfig.path === 'new') {
        this.mode = 'new';
      }
      if (params['id']) {
        this.findAllSnippet(params['id']);
        this.mode = params['mode'];
      } else {
        this.snippet = new Snippet();
        if (this.account) {
          this.snippet.userId = this.account.id;
        }
      }
    });
  }

  private updateForm(snippet: Snippet): void {
    this.editForm.patchValue({
      title: snippet.title,
      description: snippet.description,
      content: snippet.content,
    });
  }

  private updateSnippet(snippet: Snippet): void {
    snippet.title = this.editForm.get(['title'])!.value;
    snippet.description = this.editForm.get(['description'])!.value;
    snippet.content = this.editForm.get(['content'])!.value;
  }

  trackIdentity(index: number, item: Snippet): any {
    return item.id;
  }

  public findAllSnippet(id: string): void {
    this.snippetService
      .getById(id)
      .subscribe((res) => {
        this.snippet = res;
        if (this.snippet) {
          this.updateForm(this.snippet);
        }
      });
  }

  public save(): void {
    this.updateSnippet(this.snippet);
    if (this.snippet.id == null) {
      this.snippetService.create(this.snippet).subscribe(() => this.onSaveSuccess());
    } else {
      this.snippetService.update(this.snippet).subscribe(() => this.onSaveSuccess());
    }

  }

  public delete(): void {
    if (this.snippet.id != null) {
      this.snippetService.delete(this.snippet.id.toString()).subscribe(() => this.router.navigateByUrl('/snippet'));
    }
  }

  private onSaveSuccess(): void {
    this.snippetService.getAllSnippetsByUserId(this.account ? this.account.id.toString() : '');
  }
}
