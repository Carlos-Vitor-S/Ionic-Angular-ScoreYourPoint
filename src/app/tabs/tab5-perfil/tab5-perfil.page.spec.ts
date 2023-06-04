import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab5PerfilPage } from './tab5-perfil.page';

describe('Tab5PerfilPage', () => {
  let component: Tab5PerfilPage;
  let fixture: ComponentFixture<Tab5PerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab5PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
