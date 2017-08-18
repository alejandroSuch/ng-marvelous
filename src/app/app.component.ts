import { Component } from '@angular/core';

@Component({
  selector: 'marvel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'marvel';

  call(number) {
    alert(`Calling ${number}...`);
  }
}
