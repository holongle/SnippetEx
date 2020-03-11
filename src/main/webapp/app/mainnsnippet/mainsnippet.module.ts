import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterLSharedModule } from 'app/shared/shared.module';
import { MAINSNIPPET_ROUTE } from './mainsnippet.route';
import { MainsnippetComponent } from './mainsnippet.component';

@NgModule({
  imports: [JhipsterLSharedModule, RouterModule.forChild([MAINSNIPPET_ROUTE])],
  declarations: [MainsnippetComponent]
})
export class MainsnippetModule {}
