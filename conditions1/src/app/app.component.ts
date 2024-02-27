import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name="Ahalya";
  isAhalya = true;
  isAdmin = true;
  value!:number;
  fun(){
    if(this.isAhalya)
    {
  this.isAhalya=false;
  document.body.classList.remove('overlay');
    }
    else{
      this.isAhalya=true;
  document.body.classList.add('overlay');
    }
  }
  fun1(){
    if(this.isAdmin){
      this.isAdmin=false; 
      document.body.classList.remove('overlay');     
    }
    else{
      this.isAdmin=true;
  document.body.classList.add('overlay');
    }
  }
}
