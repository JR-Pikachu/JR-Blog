import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  private user: User;

  constructor(private router: Router, private userService: UserService) {}

  logOut() {
    console.log('deconnection en cours');
    this.userService.logOut();
    console.log('redirection');
    this.router.navigate(['login']);
  }

  ngOnInit() {
    if (!localStorage.getItem('loggedIn')) {
      console.log('redirection en cours');
      this.router.navigate(['login']);
    } else {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      console.log('acces a la page profil');
      console.log(this.user);
    }
  }

}
