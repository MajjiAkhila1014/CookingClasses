import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() {}

  login(email: string, password: string): boolean {
    // Dummy authentication for now
    if (email === 'admin@example.com' && password === 'password') {
      localStorage.setItem('token', 'dummy-jwt-token');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Checks if token exists
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
