import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SginFormComponent } from './sgin-form.component';

describe('SginFormComponent', () => {
  let component: SginFormComponent;
  let fixture: ComponentFixture<SginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
