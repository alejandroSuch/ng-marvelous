import {Component} from '@angular/core';

@Component({
  selector: 'marvel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'marvel';

  characters = [
    {name: 'Spider-Man', hasTights: true},
    {name: 'Hulk', hasTights: false},
    {name: 'Thor', hasTights: false},
    {name: 'Captain America', hasTights: true},
    {name: 'Deadpool', hasTights: false}
  ];
}
