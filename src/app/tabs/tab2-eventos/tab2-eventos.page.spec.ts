import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab2EventosPage } from './tab2-eventos.page';

describe('Tab2EventosPage', () => {
  let component: Tab2EventosPage;
  let fixture: ComponentFixture<Tab2EventosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab2EventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
