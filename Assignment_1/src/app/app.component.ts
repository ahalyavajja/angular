import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { IOFormComponent } from './ioform/ioform.component';
import { DaysComponent } from './days/days.component';
import { Type } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment-1';
  currentComponent !: Type<any>;
  DisCounter(){
    this.currentComponent = CounterComponent;
  }
  DisIOForm(){
    this.currentComponent = IOFormComponent;
  }
  DisSwitchCase(){
    this.currentComponent = DaysComponent;
  }
}
