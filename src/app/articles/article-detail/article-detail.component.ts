import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  sub;
  route;
  productID;

  constructor(route: ActivatedRoute) {
    this.productID = route.snapshot.params['id'];
    console.log(this.productID);
    console.log(route.snapshot.params);
   }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
}
