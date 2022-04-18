import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitHubAPIService {

  constructor(private http:HttpClient) { }

  getGitHubUserDetails(username:any){


    let promise= new Promise((resolve, reject)=>{
      resolve(this.http.get(`${environment.GitHubAPIUrl}/users/${username}??access_token=${environment.gitPAT}`).toPromise());
    })

    return promise;
  }


  getUserGitHubRepos(username:any){


    let promise= new Promise((resolve, reject)=>{
      resolve(this.http.get(`${environment.GitHubAPIUrl}/users/${username}/repos??access_token=${environment.gitPAT}`).toPromise());
    })

    return promise;
  }
}
