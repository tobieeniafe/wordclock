import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `<br><br><br><br><br><br>
            <div style="text-align:center">
              <h1>{{statement}}</h1>
              {{now}}
            </div>
          `
})
export class AppComponent {

  now: any;
  time: any;
  hour: any;
  minute: any;
  statement: string;
  period: string;
  hourWords: any;
  minuteWords: any;

  words: any = {
   1 : 'one',  2 : 'two',  3 : 'three',  4 : 'four',  5 : 'five',  6 : 'six',  7 : 'seven', 8 : 'eight',  9 : 'nine',  10 : 'ten',
   11 : 'eleven',  12 : 'twelve',  13 : 'thirteen',  14 : 'fourteen', 15 : 'quarter',  16 : 'sixteen',  17 : 'seventeen',  18 : 'eighteen',  19 : 'nineteen',  20 : 'twenty',
   21 : 'twenty-one',  22 : 'twenty-two',  23 : 'twenty-three',  24 : 'twenty-four',  25 : 'twenty-five',  26 : 'twenty-six',  27 : 'twenty-seven',  28 : 'twenty-eight',  29 : 'twenty-nine',  30 : 'half',
   45 : 'quarter'
  };

  constructor (){
      Observable.interval(1000).subscribe(() => {
          this.toWords();
      });
    }

  toWords(){
    this.now  = moment().format('LT')
    this.time  = this.now.split(":")
    this.hour = parseInt(this.time[0]);
    this.minute = parseInt(this.time[1].slice(0,3));
    this.period = this.time[1].slice(3).toLowerCase();
    this.hourWords = this.words[this.hour];
    this.minuteWords = this.words[this.minute];

    if (this.minute == 0) {
      this.statement = `It's ${this.hourWords} o'clock`;
    } else if (this.minute == 15) {
      this.statement = `It's ${this.minuteWords} past ${this.hourWords}`;
    }else if (this.minute <= 30) {
      this.statement = `It's ${this.minuteWords} minutes past ${this.hourWords}`;
    } else if (this.minute == 45) {
     this.statement = `It's ${this.minuteWords} to ${this.words[this.hour+1] }`;
   }else if (this.minute > 30 && this.minute) {
     this.statement = `It's ${this.words[60-this.minute]} minutes to ${this.words[this.hour+1] }`;
    } else {
      this.statement = `It's ${this.hourWords} ${this.minuteWords} ${this.period}`;
    }
  }




}
