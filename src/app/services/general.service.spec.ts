import { TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

import { GeneralService } from './general.service';

describe('GeneralService', () => {
    let service: GeneralService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
        }).compileComponents();
        service = TestBed.inject(GeneralService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});