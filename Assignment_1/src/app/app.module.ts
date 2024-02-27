import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { IOFormComponent } from './ioform/ioform.component';
import { DaysComponent } from './days/days.component';
import { ParentComponent } from './ioform/parent-form/parent-form.component';
import { ChildComponent } from './ioform/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DaysComponent,
    ParentComponent,
    ChildComponent,
    IOFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
