import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di-magical-angular';
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
