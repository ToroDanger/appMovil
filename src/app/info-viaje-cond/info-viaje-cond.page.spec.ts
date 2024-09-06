import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoViajeCondPage } from './info-viaje-cond.page';

describe('InfoViajeCondPage', () => {
  let component: InfoViajeCondPage;
  let fixture: ComponentFixture<InfoViajeCondPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoViajeCondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
