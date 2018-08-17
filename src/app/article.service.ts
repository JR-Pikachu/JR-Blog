import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ArticleEditResponse {
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private _api = 'http://localhost:3000/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  };

  constructor(private http: HttpClient) { }

  init() {
    console.log('service articles ok');
  }

  // API call - For register - SAMPLE V2 avec User pour TOUT
  registerArticle(articleDataSent) {
    console.log('articleAdd from articleService');
    console.log(articleDataSent);
    console.log('cancel security kan ok');
    return this.http.post<ArticleEditResponse>(this._api + 'api/articles/', articleDataSent,
    this.httpOptions);
  }
}
