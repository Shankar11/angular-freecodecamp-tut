import { Component, VERSION } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  @log
  aSimpleMethod() {
    console.log('Hey there');
  }
}
