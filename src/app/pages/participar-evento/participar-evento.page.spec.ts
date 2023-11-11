import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticiparEventoPage } from './participar-evento.page';

describe('ParticiparEventoPage', () => {
  let component: ParticiparEventoPage;
  let fixture: ComponentFixture<ParticiparEventoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParticiparEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
