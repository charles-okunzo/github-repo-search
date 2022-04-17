import { Component, OnInit } from '@angular/core';
import { GitHubAPIService } from '../service/git-hub-api.service';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css']
})
export class GitReposComponent implements OnInit {

  constructor(private ApiService:GitHubAPIService) { }

  repoDetails:any=[];
  username:any;
  resultsFound!:number;

  submited=false;

  getUserName(){
    this.submited=true
    this.ApiService.getUserGitHubRepos(this.username).then((resp)=>{
      this.repoDetails=resp;
      this.resultsFound = this.repoDetails.length
    }, err=> alert('Err::User Not Found'))
  }

  ngOnInit(): void {
    
  }

}
