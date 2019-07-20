import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadQualComponent } from './acad-qual.component';

describe('AcadQualComponent', () => {
  let component: AcadQualComponent;
  let fixture: ComponentFixture<AcadQualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadQualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadQualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
