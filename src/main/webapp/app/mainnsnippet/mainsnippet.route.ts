import {ActivatedRouteSnapshot, Resolve, Route} from '@angular/router';

import {MainsnippetComponent} from './mainsnippet.component';
import {IUser, User} from "app/core/user/user.model";
import {UserService} from "app/core/user/user.service";
import {Observable, of} from "rxjs";

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

export class UserManagementResolve implements Resolve<IUser> {
  constructor(private service: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
    const id = route.params['login'];
    if (id) {
      return this.service.find(id);
    }
    return of(new User());
  }
}

