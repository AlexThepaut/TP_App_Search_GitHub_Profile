import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_USER } from '../app.routes.constantes';

@Component({
  selector: 'app-follow-github',
  templateUrl: './follow-github.component.html',
  styleUrls: ['./follow-github.component.css']
})
export class FollowGithubComponent implements OnInit {

  @Input()
  follow: any;

  constructor(private router: Router) { }

  toFollower() {
    this.router.navigate([PATH_USER, this.follow.login]);
  }

  ngOnInit() {
  }

}
