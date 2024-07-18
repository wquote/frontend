import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string = '';
  private _isAuthenticated: boolean = false;

  constructor(private apiService: ApiService,  private router: Router) { }

  getToken(): string {
    return this._token
  }

  isAuthenticated(): boolean {
    return this._isAuthenticated
  }

  login(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.apiService.post('/login', formData)
      .subscribe(response => {
        if (response.accessToken) {
          this._token = response.accessToken;
          this._isAuthenticated = true;
          this.router.navigate(['/']);
        }
      })
  }
}
