import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab3AddEventoPage } from './tab3-add-evento.page';

describe('Tab3AddEventoPage', () => {
  let component: Tab3AddEventoPage;
  let fixture: ComponentFixture<Tab3AddEventoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab3AddEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
