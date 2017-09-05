import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
            <div style="text-align:center">
              <h1 class="time">{{statement}}</h1>
              {{now}}
            </div>
          `
})
export class AppComponent {

  now = moment().format('LT');
  time: any = this.now.split(":");
  hour: any = parseInt(this.time[0]);
  minute: any = parseInt(this.time[1].slice(0,3));
  statement: string;
  period: string = this.time[1].slice(3).toLowerCase();

  words: any = {
   1 : 'one',  2 : 'two',  3 : 'three',  4 : 'four',  5 : 'five',  6 : 'six',  7 : 'seven', 8 : 'eight',  9 : 'nine',  10 : 'ten',
   11 : 'eleven',  12 : 'twelve',  13 : 'thirteen',  14 : 'fourteen', 15 : 'quarter',  16 : 'sixteen',  17 : 'seventeen',  18 : 'eighteen',  19 : 'nineteen',  20 : 'twenty',
   21 : 'twenty-one',  22 : 'twenty-two',  23 : 'twenty-three',  24 : 'twenty-four',  25 : 'twenty-five',  26 : 'twenty-six',  27 : 'twenty-seven',  28 : 'twenty-eight',  29 : 'twenty-nine',  30 : 'half',
   31 : 'thirty-one',  32 : 'thirty-two',  33 : 'thirty-three',  34 : 'thirty-four',  35 : 'thirty-five',  36 : 'thirty-six',  37 : 'thirty-seven',  38 : 'thirty-eight',  39 : 'thirty-nine',  40 : 'forty',
   41 : 'forty-one',  42 : 'forty-two',  43 : 'forty-three',  44 : 'forty-four',  45 : 'quarter',  46 : 'forty-six',  47 : 'forty-seven',  48 : 'forty-eight',  49 : 'forty-nine',  50 : 'fifty',
   51 : 'fifty-one',  52 : 'fifty-two',  53 : 'fifty-three',  54 : 'fifty-four',  55 : 'fifty-five',  56 : 'fifty-six',  57 : 'fifty-seven',  58 : 'fifty-eight',  59 : 'fifty-nine'
  };

  hourWords = this.words[this.hour];
  minuteWords = this.words[this.minute];

  constructor (){
      //this.toWords();
      //setInterval(this.toWords(), 1000);
      Observable.interval(1000).subscribe(() => {
          this.toWords();
      });
    }

  toWords(){

    if (this.minute == 0) {
      this.statement = `It's ${this.hourWords} o'clock`;
    } else if (this.minute <= 30) {
      this.statement = `It's ${this.minuteWords} past ${this.hourWords}`;
    } else if (this.minute == 45) {
     this.statement = `It's ${this.minuteWords} to ${this.words[this.hour+1] }`;
    } else {
      this.statement = `It's ${this.hourWords} ${this.minuteWords} ${this.period}`;
    }
  }




}
