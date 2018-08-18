import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';
import { Article } from '../../model/article';

export interface Tile {
  color?: string;
  cols: number;
  rows: number;
  text?: string;
  title?: string;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articles;

  tiles: Tile[] = [
    {text: 'border-left', cols: 1, rows: 5},
    {text: 'top-left', cols: 4, rows: 1, color: 'lightgrey', title: 'Liste des articles'},
    {text: 'top-right', cols: 2, rows: 1, color: 'lightgrey', title: 'Les + populaires'},
    {text: 'border-right', cols: 1, rows: 5},
    {text: 'left', cols: 4, rows: 6, color: 'lightblue'},
    {text: 'right', cols: 2, rows: 6, color: 'lightblue'},
  ];

  articleEdit() {
    console.log('ACCES : Article List -> Article Edit');
    this.router.navigate(['article/edit']);

  }

  constructor(private articleService: ArticleService, private router: Router) {
    articleService.init();
   }

  ngOnInit() {
    console.log(this.articles);
    this.getArticlesList();
  }

  // get all articles in api
  getArticlesList() {
    this.articleService.getArticles().subscribe(data => {
      console.log('récupération des articles');
      console.log(data);
      this.articles = data;
      console.log(this.articles);
    });
  }
}
