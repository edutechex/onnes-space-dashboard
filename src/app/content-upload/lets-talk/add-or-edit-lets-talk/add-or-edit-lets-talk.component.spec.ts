import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditLetsTalkComponent } from './add-or-edit-lets-talk.component';

describe('AddOrEditLetsTalkComponent', () => {
  let component: AddOrEditLetsTalkComponent;
  let fixture: ComponentFixture<AddOrEditLetsTalkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrEditLetsTalkComponent]
    });
    fixture = TestBed.createComponent(AddOrEditLetsTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
