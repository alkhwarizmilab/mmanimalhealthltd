import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponents } from './settings-components.component';

describe('SetupComponent', () => {
  let component: SettingsComponents;
  let fixture: ComponentFixture<SettingsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
