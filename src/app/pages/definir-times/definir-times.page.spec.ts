import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefinirTimesPage } from './definir-times.page';

describe('DefinirTimesPage', () => {
  let component: DefinirTimesPage;
  let fixture: ComponentFixture<DefinirTimesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DefinirTimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
