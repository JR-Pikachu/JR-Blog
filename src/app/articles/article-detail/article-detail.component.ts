import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../article.service';
import { Article } from '../../model/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  articleID;
  articleData;

  constructor(route: ActivatedRoute, private articleService: ArticleService) {
    this.articleID = route.snapshot.params['id'];
    console.log(this.articleID);
    console.log(route.snapshot.params);
    this.getArticlesList(this.articleID);
  }

  ngOnInit() {
  }

  getArticlesList(id) {
    this.articleService.getArticle(id).subscribe(data => {
      console.log('récupération de 1 article');
      console.log(data);
      this.articleData = data;
    });
  }

  updateArticle(data) {
    console.log('update call');
    console.log(data);
  }
}
