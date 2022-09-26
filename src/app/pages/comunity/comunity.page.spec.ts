import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';

import { ComunityPage } from './comunity.page';

describe('ComunityPage', () => {
    let component: ComunityPage;
    let fixture: ComponentFixture<ComunityPage>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [ComunityPage],
            imports: [IonicModule.forRoot(), RouterTestingModule],
        }).compileComponents();
        fixture = TestBed.createComponent(ComunityPage)
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should load list', () => {
        component.loadListado();
        expect(component.listado).toEqual([{
            name: 1
          }]);
    });
});