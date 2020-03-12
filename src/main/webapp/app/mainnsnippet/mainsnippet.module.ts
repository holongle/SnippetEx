import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterLSharedModule } from 'app/shared/shared.module';
import {CHILD_SNIPPET_ROUTE, MAINSNIPPET_ROUTE} from './mainsnippet.route';
import { MainsnippetComponent } from './mainsnippet.component';
import {SnippetsComponent} from "./snippets/snippets.component";
import {SnippetDetailComponent} from "app/mainnsnippet/snippets/snippet-detail-component";

@NgModule({
  imports: [JhipsterLSharedModule, RouterModule.forChild([MAINSNIPPET_ROUTE, CHILD_SNIPPET_ROUTE])],
  declarations: [MainsnippetComponent , SnippetsComponent, SnippetDetailComponent],
  entryComponents:[MainsnippetComponent, SnippetsComponent, SnippetDetailComponent]
})
export class MainsnippetModule {}
