import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

  ngOnInit(): void {
    this.service.assignValues();
  }

  constructor(private router : Router, public service : AuthService)
  {

  }
  
  logout()
  {
    localStorage.removeItem('token');
    this.service.role = "";
    this.router.navigate([''])
  }
}
