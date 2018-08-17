import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../model/user';
import { Article } from '../../model/article';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  private user: User;
  private article: Article;
  private productID;

  title = 'Ajouter un article ?';
  hide = true;

  constructor( private router: Router, route: ActivatedRoute ) {
    this.productID = route.snapshot.params['id'];
    console.log(this.productID);
    console.log('route.snapshot.params');
    console.log(route.snapshot.params);
    this.article = new Article();

    console.log(this.article);
   }

  ngOnInit() {
    if (!localStorage.getItem('loggedIn')) {
      console.log('Pas connecter rediriger vers article liste');
      this.router.navigate(['article']);
    } else {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      console.log('acces -> Article Edit');
      console.log(this.user);
    }
  }

  onSubmitArticleEdit(form) {
    console.log('onSubmitArticleEdit');
    console.log(form.value);
  }
}
