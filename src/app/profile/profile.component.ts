import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  constructor(private router : Router, public service : AuthService) {
    
  }

  ngOnInit(): void {
    this.service.assignValues();
  }

  logout()
  {
    localStorage.removeItem('token');
    this.service.role = "";
    this.router.navigate([''])
  }
}
