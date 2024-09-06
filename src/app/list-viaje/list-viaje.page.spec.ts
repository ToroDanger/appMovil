import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListViajePage } from './list-viaje.page';

describe('ListViajePage', () => {
  let component: ListViajePage;
  let fixture: ComponentFixture<ListViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
