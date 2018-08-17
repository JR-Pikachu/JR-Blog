import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Main page
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Articles Pages & Services
import { ArticleService } from './article.service';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';

// Users Pages & Services
import { UserService } from './user.service';
import { UserConnectionComponent } from './user/user-connection/user-connection.component';
import { UserProfilComponent } from './user/user-profil/user-profil.component';

// Angular material - animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

// http
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './body/body.component';


const appRoutes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'article', component: ArticleListComponent },
  { path : 'article/edit', component: ArticleEditComponent },
  { path : 'user', component: UserProfilComponent },
  { path: 'article/:id', component: ArticleDetailComponent},
  { path : 'login', component: UserConnectionComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    UserProfilComponent,
    UserConnectionComponent,
    ArticleEditComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    ArticleService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
