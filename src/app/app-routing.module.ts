import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NonExistingComponent} from './non-existing/non-existing.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '404', component: NonExistingComponent},
  {path: '**', component: NonExistingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
