import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './service/auth.guard';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: NavbarComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
