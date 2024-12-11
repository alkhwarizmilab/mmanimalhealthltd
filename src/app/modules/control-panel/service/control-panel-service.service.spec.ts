import { TestBed } from '@angular/core/testing';

import { ControlPanelServiceService } from './control-panel-service.service';

describe('ControlPanelServiceService', () => {
  let service: ControlPanelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlPanelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
