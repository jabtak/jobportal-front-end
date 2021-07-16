import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupAlumniComponent} from '../app/signup-alumni/signup-alumni.component';
import {SigninAlumniComponent} from '../app/signin-alumni/signin-alumni.component';

const routes: Routes = [
  {path:'sign-in', component: SigninAlumniComponent},
  {path: 'sign-up', component: SignupAlumniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
