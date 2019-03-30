import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-github',
  templateUrl: './repo-github.component.html',
  styleUrls: ['./repo-github.component.css']
})
export class RepoGithubComponent implements OnInit {
  @Input()
  repo: any;

  constructor() { }

  ngOnInit() {
  }

}
