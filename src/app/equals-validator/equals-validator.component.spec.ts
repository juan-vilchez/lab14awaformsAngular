import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualsValidatorComponent } from './equals-validator.component';

describe('EqualsValidatorComponent', () => {
  let component: EqualsValidatorComponent;
  let fixture: ComponentFixture<EqualsValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqualsValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualsValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
