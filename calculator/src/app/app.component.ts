import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  num1 !: number;
  num2 !: number;
  num3 !: number;
  add(){
    this.num3 = this.num1 + this.num2;
  }
  sub(){
    this.num3 = this.num1 - this.num2;
  }
  mul(){
    this.num3 = this.num1 * this.num2;
  }
  divi(){
    this.num3 = this.num1 / this.num2;
  }
  reset(){
    this.num1 = NaN;
    this.num2 = NaN;
    this.num3 = this.num1;
    
  }
}
