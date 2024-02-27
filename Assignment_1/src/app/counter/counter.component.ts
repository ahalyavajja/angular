import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  value = 0;
  inc(){
    this.value++;
  }
  dec(){
    this.value--;
  }
  reset(){
    this.value = 0;
  }
}
