import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  template: './login.component',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent { }
