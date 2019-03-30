import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE_URL = 'https://api.github.com/';
const API_USERS = 'users/';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  constructor(private http: HttpClient) { }

  getUser(login: string) {
    return this.http.get(`${API_BASE_URL}${API_USERS}${login}`);
  }

  getUserRepo(login: string) {
    return this.http.get(`${API_BASE_URL}${API_USERS}${login}/repos`);
  }

  getUserFollowers(login: string) {
    return this.http.get(`${API_BASE_URL}${API_USERS}${login}/followers`);
  }
}
