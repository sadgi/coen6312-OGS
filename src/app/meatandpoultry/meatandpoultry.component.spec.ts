import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatandpoultryComponent } from './meatandpoultry.component';

describe('MeatandpoultryComponent', () => {
  let component: MeatandpoultryComponent;
  let fixture: ComponentFixture<MeatandpoultryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatandpoultryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatandpoultryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
