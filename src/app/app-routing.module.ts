import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitReposComponent } from './git-repos/git-repos.component';
import { GitUsersComponent } from './git-users/git-users.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'github-users', component:GitUsersComponent},
  {path:'github-repositories', component:GitReposComponent},
  {path:'home-page', component:HomePageComponent},
  {path:'', redirectTo:'github-users', pathMatch:'full'},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
