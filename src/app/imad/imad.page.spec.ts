import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImadPage } from './imad.page';

describe('ImadPage', () => {
  let component: ImadPage;
  let fixture: ComponentFixture<ImadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
