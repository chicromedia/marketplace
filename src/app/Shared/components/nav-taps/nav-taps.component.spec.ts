import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTapsComponent } from './nav-taps.component';

describe('NavTapsComponent', () => {
  let component: NavTapsComponent;
  let fixture: ComponentFixture<NavTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
