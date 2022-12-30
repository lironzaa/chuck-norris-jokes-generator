import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputTextComponent } from './app-input-text.component';

describe('AppTextComponent', () => {
  let component: AppInputTextComponent;
  let fixture: ComponentFixture<AppInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInputTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
