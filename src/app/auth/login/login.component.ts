import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/constants/user-type';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const userType = this.authService.loggedInUserType;
    this.switchToUserRoute(userType);
  }

  switchToUserRoute(userType: UserType) {
    switch(userType) {
      case UserType.Librarian:
        this.router.navigate(['/librarian']);
        break;
      case UserType.Student:
        this.router.navigate(['/student']);
    }
  }

  loginAsLibrarian() {
    const userType = UserType.Librarian;
    this.authService.login(userType);
    this.switchToUserRoute(userType);
  }

  loginAsStudent() {
    const userType = UserType.Student;
    this.authService.login(userType);
    this.switchToUserRoute(userType);
  }

}
