import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GitHubAPIService } from '../service/git-hub-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  username:string='charles-okunzo';
  userDetails:any;

  constructor(private githubApi: GitHubAPIService, private ngxLoader:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxLoader.start();
      this.githubApi.getGitHubUserDetails(this.username).then((resp)=>{
        this.userDetails= resp
        console.log(resp)
        this.ngxLoader.stop()
      }, err=> alert('User Not Found'))
  }

}
