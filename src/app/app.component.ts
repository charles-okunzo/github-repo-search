import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'githubRepoSearch';

  constructor(private ngxService:NgxUiLoaderService){}

  ngOnInit(){
    this.ngxService.start();

    setTimeout(()=>{
      this.ngxService.stop()
    }, 3000);

  }
}
