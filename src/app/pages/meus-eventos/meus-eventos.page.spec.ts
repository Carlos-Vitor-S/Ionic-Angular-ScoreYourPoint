import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusEventosPage } from './meus-eventos.page';

describe('MeusEventosPage', () => {
  let component: MeusEventosPage;
  let fixture: ComponentFixture<MeusEventosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeusEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
