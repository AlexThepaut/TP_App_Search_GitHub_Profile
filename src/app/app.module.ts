import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './user-page/user-page.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatDividerModule
} from '@angular/material';
import { RepoGithubComponent } from './repo-github/repo-github.component';
import { FollowGithubComponent } from './follow-github/follow-github.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    RepoGithubComponent,
    FollowGithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
