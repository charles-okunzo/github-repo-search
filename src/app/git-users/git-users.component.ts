import { Component, OnInit } from '@angular/core';
import { GitHubAPIService } from '../service/git-hub-api.service';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {

  userDetails:any= [];

  constructor(private githubApi:GitHubAPIService) { }

  ngOnInit(): void {

   this.githubApi.getGitHubUserDetails('AjedidahMwanzia').then((resp=>{
     this.userDetails= resp
     console.log(resp)
   }))
   
  }

}
