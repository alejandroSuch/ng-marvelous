import { Component } from '@angular/core';

@Component({
  selector: 'marvel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'marvel';

  characters = ['Spider-Man', 'Hulk', 'Thor', 'Captain America', 'Iron Man', 'Deadpool'];
}
