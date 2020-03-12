import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {SERVER_API_URL} from 'app/app.constants';
import {ISnippet} from "app/mainnsnippet/model/snippet.model";

@Injectable({providedIn: 'root'})
export class SnippetService {
  private snippetAPIUrl = SERVER_API_URL + 'api/snippets';

  constructor(private http: HttpClient) {
  }

  getById(id: string): Observable<ISnippet> {
    return this.http.get<ISnippet>(this.snippetAPIUrl + '/' + id);
  }

  getAll(): Observable<ISnippet[]> {
    return this.http.get<ISnippet[]>(this.snippetAPIUrl);
  }

  getAllByUserId(userId: string): Observable<ISnippet[]> {
    return this.http.get<ISnippet[]>(this.snippetAPIUrl + '/user/' + userId);
  }
}
