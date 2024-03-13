import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciatoriListComponent } from './calciatori-list.component';

describe('CalciatoriListComponent', () => {
  let component: CalciatoriListComponent;
  let fixture: ComponentFixture<CalciatoriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalciatoriListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalciatoriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
