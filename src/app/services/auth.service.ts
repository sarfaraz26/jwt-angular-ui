import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(formData : any)
  {
    return this.http.post('http://localhost:5014/api/auth/login', formData);  
  }

}
