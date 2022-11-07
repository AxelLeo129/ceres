import { TestBed, ComponentFixture, waitForAsync, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';

import { ComunityPage } from './comunity.page';

describe('ComunityPage', () => {
    let component: ComunityPage;
    let fixture: ComponentFixture<ComunityPage>;
    let location: Location;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [ComunityPage],
            imports: [IonicModule.forRoot(), RouterTestingModule],
        }).compileComponents();
        fixture = TestBed.createComponent(ComunityPage)
        component = fixture.componentInstance;
        fixture.detectChanges();
        location = TestBed.inject(Location);
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

    // it('should load list', fakeAsync(() => {
    //     component.toRestaurant(1);
    //     tick();
    //     expect(location.path()).toBe(location.path());
    // }));
});