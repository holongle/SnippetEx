import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {SERVER_API_URL} from 'app/app.constants';
import {ISnippet, Snippet} from "app/mainnsnippet/model/snippet.model";

@Injectable({providedIn: 'root'})
export class SnippetService {
  private snippetAPIUrl = SERVER_API_URL + 'api/snippets';
  public snippetsStore: Snippet[] = [];

  constructor(private http: HttpClient) {
  }

  public getAllSnippetsByUserId(userId: string): void {
    this.getAllByUserId(userId)
      .subscribe((res) => {
        this.snippetsStore = res;
      });
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

  update(snippet: ISnippet): Observable<ISnippet> {
    return this.http.put<ISnippet>(this.snippetAPIUrl, snippet);
  }

  create(snippet: ISnippet): Observable<ISnippet> {
    return this.http.post<ISnippet>(this.snippetAPIUrl, snippet);
  }

  delete(id: string): Observable<{}> {
    return this.http.delete(this.snippetAPIUrl + '/' + id);
  }
}
