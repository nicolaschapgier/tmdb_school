import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputResultComponent } from './input-result.component';

describe('InputResultComponent', () => {
  let component: InputResultComponent;
  let fixture: ComponentFixture<InputResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
