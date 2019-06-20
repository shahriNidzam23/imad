import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IqraPage } from './iqra.page';

describe('IqraPage', () => {
  let component: IqraPage;
  let fixture: ComponentFixture<IqraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IqraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IqraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
