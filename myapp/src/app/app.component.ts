import { Component } from '@angular/core';

//services
import { AuthService } from './auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  title = 'Alex Chiu';
}
