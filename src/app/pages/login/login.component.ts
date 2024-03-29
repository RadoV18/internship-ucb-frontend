import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  displayModal : boolean = false;
  constructor(private router : Router) { }

  setDisplayModal(value : boolean) {
    this.displayModal = value;
  }
  redirectTo(type : string) {
    this.router.navigate([`/registro/${type}`]);
  }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}
