import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GitHubAPIService } from '../service/git-hub-api.service';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css']
})
export class GitReposComponent implements OnInit {

  constructor(private ApiService:GitHubAPIService, private ngxLoader:NgxUiLoaderService) { }

  repoDetails:any=[];
  username:any;
  resultsFound!:number;

  submited=false;

  getUserName(){
    this.submited=true;
    this.ngxLoader.start();
    this.ApiService.getUserGitHubRepos(this.username).then((resp)=>{
      this.repoDetails=resp;
      this.resultsFound = this.repoDetails.length
    }, err=> alert('Err::User Not Found'))
    this.ngxLoader.stop();
  }

  ngOnInit(): void {
    
  }

}
