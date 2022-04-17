import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitReposComponent } from './git-repos/git-repos.component';
import { GitUsersComponent } from './git-users/git-users.component';

const routes: Routes = [
  {path:'github-users', component:GitUsersComponent},
  {path:'github-repositories', component:GitReposComponent},
  {path:'', redirectTo:'github-users', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
