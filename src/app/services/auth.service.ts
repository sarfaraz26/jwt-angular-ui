import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public role: string = ""
  public username: string = ""

  constructor(private http: HttpClient) { }

  login(formData: any): Observable<any> {
    return this.http.post('http://localhost:5014/api/auth/login', formData);
  }

  assignValues() 
  {
    const token = localStorage.getItem('token');
  
    if(token != null)
    {
      let tokenFirstPartText = atob(token.split('.')[1]);
      let obj = JSON.parse(tokenFirstPartText);
      this.username = obj["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      this.role = obj["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    }
  }


}
