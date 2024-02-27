import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOFormComponent } from './ioform.component';

describe('IOFormComponent', () => {
  let component: IOFormComponent;
  let fixture: ComponentFixture<IOFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IOFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IOFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
