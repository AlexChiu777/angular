import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechProfComponent } from './tech-prof.component';

describe('TechProfComponent', () => {
  let component: TechProfComponent;
  let fixture: ComponentFixture<TechProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
