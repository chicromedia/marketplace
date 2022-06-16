import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPrimaryComponent } from './button-primary.component';

describe('BtnPrimaryComponent', () => {
  let component: ButtonPrimaryComponent;
  let fixture: ComponentFixture<ButtonPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
