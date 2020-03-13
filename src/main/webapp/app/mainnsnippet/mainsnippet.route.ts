import {Route} from '@angular/router';

import {MainsnippetComponent} from './mainsnippet.component';

export const MAINSNIPPET_ROUTE: Route = {
  path: '',
  component: MainsnippetComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome, Snippet!'
  }
};

export const CHILD_SNIPPET_ROUTE: Route = {
  path: 'user/:id',
  component: MainsnippetComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome, Snippet!'
  }
};

export const CHILD_UPDATE_SNIPPET_ROUTE: Route = {
  path: 'user/:id/:mode',
  component: MainsnippetComponent,
  data: {
    authorities: [],
    pageTitle: 'Snippet'
  }
};

export const CHILD_CREATE_SNIPPET_ROUTE: Route = {
  path: 'new',
  component: MainsnippetComponent,
  data: {
    authorities: [],
    pageTitle: 'Create Snippet!'
  }
};
