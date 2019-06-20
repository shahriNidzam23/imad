import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IqraInfoPage } from './iqra-info.page';

describe('IqraInfoPage', () => {
  let component: IqraInfoPage;
  let fixture: ComponentFixture<IqraInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IqraInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IqraInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
