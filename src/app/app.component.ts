import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Different Services provided to an App with the same alias class';
  constructor(
    private authservice: AuthService,
    private router: Router
  ) {}

  get isLoggedIn() {
    return this.authservice.isLoggedIn();
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['/auth']);
  }
}
