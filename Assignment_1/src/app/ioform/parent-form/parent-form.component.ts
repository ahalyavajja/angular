// parent.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentComponent {
  name: string = '';
  submitted: boolean = false;

  submitForm(): void {
    this.submitted = true;
  }
}
