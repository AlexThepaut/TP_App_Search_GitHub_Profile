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

  constructor(private route: ActivatedRoute, private apiGithub: GithubApiService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      console.log(param.get('user'));
      this.apiGithub.getUser(param.get('user')).subscribe(
        data => {
          this.user = data;
          console.log(data)
        },
        (error) => {
          this.router.navigate([PATH_HOME]);
        }
      );
    })
  }

}
