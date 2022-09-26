import { TestBed } from '@angular/core/testing';

import { ToolService } from './tools.service';

describe('ToolService', () => {
    let service: ToolService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: []
        }).compileComponents();
        service = TestBed.inject(ToolService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});