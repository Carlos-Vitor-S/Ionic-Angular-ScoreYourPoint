import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilEfetuadoPage } from './perfil-efetuado.page';

describe('PerfilEfetuadoPage', () => {
  let component: PerfilEfetuadoPage;
  let fixture: ComponentFixture<PerfilEfetuadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilEfetuadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
