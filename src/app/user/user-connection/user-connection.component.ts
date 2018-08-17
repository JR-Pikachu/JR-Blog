import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

export interface Tile {
  color?: string;
  cols: number;
  rows: number;
  text?: string;
  title?: string;
}

@Component({
  selector: 'app-user-connection',
  templateUrl: './user-connection.component.html',
  styleUrls: ['./user-connection.component.css']
})
export class UserConnectionComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'border-left', cols: 1, rows: 5},
    {text: 'top-left', cols: 3, rows: 1, color: 'lightgrey', title: 'Déjà un compte ?'},
    {text: 'top-right', cols: 3, rows: 1, color: 'lightgrey', title: 'Pas encore inscrit ?'},
    {text: 'border-right', cols: 1, rows: 5},
    {text: 'left', cols: 3, rows: 4, color: 'white'},
    {text: 'right', cols: 3, rows: 4, color: 'white'},
  ];

  log_email = new FormControl('toto@gmail.com', [Validators.required, Validators.email]);
  sub_email = new FormControl('toto@gmail.com', [Validators.required, Validators.email]);

  hide = true;

  // temporaire
  private user: User;

  getErrorMessage() {
    return this.log_email.hasError('required') ? 'Vous devez entrer un e-mail valide' :
        this.log_email.hasError('email') ? 'L\'e-mail n\'est pas valides' :
            '';
  }

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
    userService.init();
  }

  ngOnInit() {
    /*
    if(!data.success) {
      console.log('no data');
    }
    */
  }

  onSubmitLogin(form) {
    console.log('onSubmitLogin');

//    this.user = form.value; V1
    this.user.username = form.value.log_name;
    this.user.password = form.value.log_password;
    this.user.email = this.log_email.value.trim();
    console.log('this.user for login sent');
    console.log(this.user);

    this.userService.loginUser(this.user).subscribe(data => {
      console.log('data from loginUser Service');
      console.log(data);
      if (data.result === true) {
        console.log ('Connecté !');
        this.userService.setUserSession(data);
        this.router.navigate(['user']);

// unset quand c ok        this.userService.setLoggedIn(true);
//        localStorage.setItem('currentUser', JSON.stringify(user));

//        this.router.navigate(['']);
      }
    });
  }

  onSubmitSubscribe(form) {
    console.log('onSubmitSubscribe');
    console.log('CONTROL VAL');
    this.user.username = form.value.sub_name;
    this.user.password = form.value.sub_password;
    this.user.email = this.sub_email.value.trim();
    console.log('this.user for register sent');
    console.log(this.user);

    this.userService.registerUser(this.user).subscribe(data => {
      console.log(data);
      if (data.success) {
//        this.router.navigate(['dashboard']);
        this.router.navigate(['']);
      }
    });
    console.log(this.user);
  }

  // Verifier les données ici, return false, si erreur
  checkingForm(form) {
    console.log(form);
  }
}
