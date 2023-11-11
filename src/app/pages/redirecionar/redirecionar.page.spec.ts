import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedirecionarPage } from './redirecionar.page';

describe('RedirecionarPage', () => {
  let component: RedirecionarPage;
  let fixture: ComponentFixture<RedirecionarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RedirecionarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
