import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GithubApiService } from '../services/github-api.service';
import { PATH_HOME } from '../app.routes.constantes';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: any;
  repos: any;
  followers: any;

  constructor(private route: ActivatedRoute, private apiGithub: GithubApiService, private router: Router) { }

  toHome() {
    this.router.navigate([PATH_HOME]);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const userToSearch: string = param.get('user');
      this.apiGithub.getUser(userToSearch).subscribe(
        data => {
          this.user = data;
        },
        (error) => {
          this.router.navigate([PATH_HOME]);
        }
      );
      this.apiGithub.getUserRepo(userToSearch).subscribe(
        data => {
          console.log(data);
          this.repos = data;
        }
      );
      this.apiGithub.getUserFollowers(userToSearch).subscribe(
        data => {
          this.followers = data;
        }
      );
    });
  }
}
