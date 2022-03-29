import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildeComponent } from './childe.component';

describe('ChildeComponent', () => {
  let component: ChildeComponent;
  let fixture: ComponentFixture<ChildeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
