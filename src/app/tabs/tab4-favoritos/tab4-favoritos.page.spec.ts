import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab4FavoritosPage } from './tab4-favoritos.page';

describe('Tab4FavoritosPage', () => {
  let component: Tab4FavoritosPage;
  let fixture: ComponentFixture<Tab4FavoritosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab4FavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
