import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: './footer.component',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
