import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SginInComponent } from './sgin-in.component';

describe('SginInComponent', () => {
  let component: SginInComponent;
  let fixture: ComponentFixture<SginInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SginInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SginInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
