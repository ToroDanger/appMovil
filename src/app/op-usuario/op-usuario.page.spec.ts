import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpUsuarioPage } from './op-usuario.page';

describe('OpUsuarioPage', () => {
  let component: OpUsuarioPage;
  let fixture: ComponentFixture<OpUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OpUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
