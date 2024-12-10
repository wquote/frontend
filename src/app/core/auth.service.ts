import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated: boolean = false
  private _tokenIsValid: boolean = false

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.checkIfUserIsAuthenticatedEveryMinute()
  }

  getToken(): string {
    return localStorage.getItem('wquoteToken') || ''
  }

  private setToken(token: string) {
    localStorage.setItem('wquoteToken', token)
  }

  isAuthenticated(): boolean {
    return this.getToken() !== '' ? true : false
  }

  checkIfUserIsAuthenticatedEveryMinute() {
    setInterval(() => {
      if (this._tokenIsValid) {
        this.apiService.get('/auth/token/validate')
          .subscribe({
            error: (resp: HttpResponse<any>) => {
              if (resp.status == 401) {
                window.alert('Session expired.')
                this.logout()
              }
            }
          })
      }
      else {
        window.alert('Session expired.')
        this.logout()
      }
    }, 600000)
  }

  login(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.apiService.post('/login', formData)
      .subscribe((response: any) => {
        if (response.accessToken) {
          this.setToken(response.accessToken)
          this._isAuthenticated = true
          this._tokenIsValid = true
          this.router.navigate(['/'])
        }
      })
  }

  logout() {
    localStorage.removeItem('wquoteToken')
    this._isAuthenticated = false
    this._tokenIsValid = false
    this.router.navigate(['/login'])
  }
}
