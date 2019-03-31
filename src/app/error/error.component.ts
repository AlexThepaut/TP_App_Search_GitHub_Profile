import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const errorType: string = param.get('error');
      if(errorType == '403'){
        this.errorMessage = 'Accès au serveur refusé';
      }
      if(errorType == '404'){
        this.errorMessage = `Pas d'utilisateur trouvé`;
      }
    })
  }
}
