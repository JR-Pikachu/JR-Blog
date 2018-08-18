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
    return this.http.post<ArticleEditResponse>(this._api + 'api/articles/', articleDataSent,
    this.httpOptions);
  }

  // API call - For Getting - SAMPLE V2 avec User pour TOUT
  getArticles() {
    console.log('getArticles from articleService');
    return this.http.get<ArticleEditResponse>(this._api + 'api/articles/');
  }

  getArticle(id: string) {
    console.log('getArticles from articleService');
    return this.http.get<ArticleEditResponse>(this._api + 'api/articles/' + id);
  }

}
