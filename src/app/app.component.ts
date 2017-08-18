import { Component } from '@angular/core';

@Component({
  selector: 'marvel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'marvel';

  helloWorldImgSrc = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
  bgColor = 'red';
  useRedBgColor = false;
  buttonDisabled = true;
  inputValue = 'initial value';

  toggleBtn() {
    this.buttonDisabled = !this.buttonDisabled;
  }

  onInputChanged(value) {
    this.inputValue = value;
  }

  clearInputValue() {
    this.inputValue = '';
  }
}
