import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterLSharedModule } from 'app/shared/shared.module';
import { JhipsterLCoreModule } from 'app/core/core.module';
import { JhipsterLAppRoutingModule } from './app-routing.module';
import { JhipsterLHomeModule } from './home/home.module';
import { JhipsterLEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterLSharedModule,
    JhipsterLCoreModule,
    JhipsterLHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterLEntityModule,
    JhipsterLAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterLAppModule {}
