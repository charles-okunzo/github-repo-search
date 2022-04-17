import { Component, OnInit } from '@angular/core';
import { GitHubAPIService } from '../service/git-hub-api.service';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {

  username:any

  userDetails:any= [];

  constructor(private githubApi:GitHubAPIService) { }

  collectUserName(){
      this.githubApi.getGitHubUserDetails(this.username).then((resp)=>{
        this.userDetails= resp
      }, err=> alert('User Not Found'))

      console.log(this.username)
    return false;
  }

  ngOnInit(): void {
   
  }

}
