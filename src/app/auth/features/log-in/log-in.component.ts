import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  imports: [RouterLink],
  templateUrl: './log-in.component.html',
  styles: ``
})
export default class LogInComponent {
  constructor(private authService: AuthService) {}
}
