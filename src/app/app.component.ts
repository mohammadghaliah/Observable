import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataStream: Observable<string>;

  //send Data
  createStream() {
    this.dataStream = new Observable((Observer) => {
      setTimeout(() => {
        Observer.next('value1');
      }, 1000);

      setTimeout(() => {
        Observer.next('value2');
      }, 3000);

      setTimeout(() => {
        Observer.next('value3');
      }, 5000);

      setTimeout(() => {
        Observer.complite();
      }, 7000);
    });
    return this.dataStream;
  }
}

// RXJX COMPAT : رابط تحميل
// https://www.npmjs.com/package/rxjs-compat

// Observable مصدر ببعت اكثر من داتا
// ببعت value
// بعد شوي ببعت كمان value
// اذا صار ايرور ببعت ايررور
// وبس يخلص ممكن يعمل كود معين
