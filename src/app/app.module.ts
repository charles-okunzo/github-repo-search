import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitUsersComponent } from './git-users/git-users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitReposComponent } from './git-repos/git-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    GitUsersComponent,
    NavbarComponent,
    GitReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
