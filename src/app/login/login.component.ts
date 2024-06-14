import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public username : string = ""
  public password : string = ""

  constructor(private router : Router, private authService : AuthService) {
    
  }


  login(form : NgForm)
  {
    this.authService.login(form.value).subscribe(
      (res : any) => {
        localStorage.setItem('token',res.token);  
        form.reset();
        this.router.navigate(['/user/profile'])
      },
      err => {
        console.error(err);
      }
    )
  }
}
