import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false
  private userRole: string | null = null
  
  private tokenKey = 'auth_token';
  private roleKey = 'user_role';

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Simular la autenticación
    if (username === 'admin' && password === 'admin') {
       const fakeToken = 'token_admin_12345678902345677890ABCDEfghij'
      this.isAuthenticated = true;
      this.userRole = 'admin';
      sessionStorage.setItem(this.tokenKey, fakeToken);
      sessionStorage.setItem(this.roleKey, 'admin');
      return true;
    } else if (username === 'user' && password === 'user') {
       const fakeToken = 'token_user_12345678902345677890ABCDEfghij'
      this.isAuthenticated = true;
      this.userRole = 'user';
      sessionStorage.setItem(this.tokenKey, fakeToken);
      sessionStorage.setItem(this.roleKey, 'user');
      return true;
    }
    return false;
  }

  logout() {
    //this.isAuthenticated = false;
    //this.userRole = null;
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.roleKey);
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    //return this.userRole;
    return sessionStorage.getItem(this.roleKey);
  }

  isLoggedIn(): boolean {
    //return this.isAuthenticated;
    return sessionStorage.getItem(this.tokenKey) !== null;
  }
}
