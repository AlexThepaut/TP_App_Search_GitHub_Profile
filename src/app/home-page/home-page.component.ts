import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';
import { Router } from '@angular/router';
import { PATH_USER } from '../app.routes.constantes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userName: string;

  constructor(private router: Router) { }

  updateUser(value){
    this.userName = value.target.value;
  }

  searchUser(){
    this.router.navigate([PATH_USER, this.userName]);
  }

  ngOnInit() {
  }

}
