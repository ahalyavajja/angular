import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Ahalya";
  count = 0;
  isDisabled = false;
  evenFlag = true;
  isEven = "Even"
  checkEO(){
    if(this.count % 2 ==1){
      this.isEven = "odd";
      this.evenFlag = false;
    }
    else{
      this.isEven = "Even";
      this.evenFlag = true;
    }
  }
  incerement(){
    if(this.count >=20){
      this.isDisabled = true;
    }
    else{
      this.count++;
    }
  }
  decrement(){
    this.count--;
    this.checkEO();
  }
  reset(){
    this.count = 0;
  }
  }
