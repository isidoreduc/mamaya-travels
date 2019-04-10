import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Amemities3colComponent } from './amemities3col.component';

describe('Amemities3colComponent', () => {
  let component: Amemities3colComponent;
  let fixture: ComponentFixture<Amemities3colComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Amemities3colComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Amemities3colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
