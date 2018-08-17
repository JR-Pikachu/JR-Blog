import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

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

  public tabArticles: Array<any>;
  public article1;
  public article2;

  tiles: Tile[] = [
    {text: 'border-left', cols: 1, rows: 5},
    {text: 'top-left', cols: 4, rows: 1, color: 'lightgrey', title: 'Liste des articles'},
    {text: 'top-right', cols: 2, rows: 1, color: 'lightgrey', title: 'Les + populaires'},
    {text: 'border-right', cols: 1, rows: 5},
    {text: 'left', cols: 4, rows: 4, color: 'lightblue'},
    {text: 'right', cols: 2, rows: 4, color: 'lightblue'},
  ];

  articleEdit() {
    console.log('ACCES : Article List -> Article Edit');
    this.router.navigate(['article/edit']);

  }

  constructor(private articleService: ArticleService, private router: Router) {
    articleService.init();
    this.initMyArticles();
    this.tabArticles = [this.article1, this.article2];
   }

  ngOnInit() {
  }


  // fake data
  public initMyArticles() {
    this.article1 = {
      'id' : 1,
      'title' : 'Pikachu',
      'content' : 'Rongeur Jaune'
    };
    this.article2 = {
      'id' : 2,
      'title' : 'Ectoplasma',
      'content' : 'Fantome'
    };
  }
}
