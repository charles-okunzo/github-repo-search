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


  getUserName(){
    this.ApiService.getUserGitHubRepos(this.username).then((resp)=>{
      this.repoDetails=resp;
      console.log(resp)
    }, err=> alert('Err::User Not Found'))
  }

  ngOnInit(): void {
    
  }

}
