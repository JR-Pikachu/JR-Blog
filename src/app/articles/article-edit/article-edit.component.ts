import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../model/user';
import { Article } from '../../model/article';
import { ArticleService } from '../../article.service';

// TEST
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// TEST
export interface DialogData {
  animal: string;
  name: string;
}

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
  actualDate: string;

  constructor( private router: Router, route: ActivatedRoute,
    private articleService: ArticleService, public dialog: MatDialog) {
    this.productID = route.snapshot.params['id'];
    console.log(this.productID);
    console.log('route.snapshot.params');
    console.log(route.snapshot.params);
    this.article = new Article();

    console.log(this.article);

    this.getActualDate();

    // MODAL TEMP
    this.openDialog();
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

  getActualDate() {
    const d = new Date();
    const datestring = d.getDate() + '-' +
    (d.getMonth() + 1) + '-' +
    d.getFullYear() + ' à ' +
    d.getHours() + ':' +
    d.getMinutes();

    this.actualDate = datestring;
  }

  onSubmitArticleEdit(form) {
    console.log('onSubmitArticleEdit');
    console.log(form.value);
    console.log(this.actualDate);
    // remplir
    this.article.title = form.value.art_title;
    this.article.content = form.value.art_content;
    this.article.createdAt = this.actualDate;
    this.article.updatedAt = this.actualDate;
    this.article.state = 1;
    this.article.author = this.user.username;
    console.log('object article fini');
    console.log(this.article);

    this.articleService.registerArticle(this.article).subscribe(data => {
      console.log(' ok retour api du DATA - ajouté');
      console.log(data);
      if (data.success) {
        console.log('article enregistré');
      }
    });
  }

  // MODAL TEMP
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: 'this.name', animal: 'this.animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
//      this.animal = result;
    });
  }


}

// MODAL TEMP
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}