import { Route } from '@angular/router';

import { MainsnippetComponent } from './mainsnippet.component';

export const MAINSNIPPET_ROUTE: Route = {
  path: '',
  component: MainsnippetComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome, Snippet!'
  }
};
