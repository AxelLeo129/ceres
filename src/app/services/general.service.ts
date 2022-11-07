import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, getDoc, doc, setDoc } from '@angular/fire/firestore';
import {
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from '@angular/fire/storage';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor(
    private firestore: Firestore,
    private storage: Storage
  ) {}

  // getDoc(collectionName: string, id: string): Promise<any> {
  //   return new Promise(async (res, rej) => {
  //     getDoc(doc(this.firestore, collectionName, id)).then(response => res(response.data())).catch(err => rej(err));
  //   });
  // }

  // getCollection(collectionName: string): Promise<any> {
  //   return new Promise(async (res, rej) => {
  //     const connection = collection(this.firestore, collectionName);
  //     firstValueFrom(collectionData(connection)).then(response => res(response)).catch(err => rej(err));
  //   })
  // }

  // postDocument(collectionName: string, data: any): Promise<any> {
  //   const connection = collection(this.firestore, collectionName);
  //   return addDoc(connection, data);
  // }

  // setDocument(collection: string, data: any, id: string): Promise<any> {
  //   const document = doc(this.firestore, collection, id);
  //   return setDoc(document, data);
  // }

  // async uploadFile(file: any, folder: string, name?: string): Promise<string> {
  //   return new Promise(async (res, rej) => {
  //     if (file.size / 1024 / 1024 > 20) rej('Es un archivo demasiado grande');
  //     const fileRef = ref(this.storage, folder + '/' + name + '.jpg');
  //     const uploadTask = uploadBytesResumable(fileRef, file);
  //     uploadTask.on('state_changed',
  //       () => {},
  //       (err) => rej(err),
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((dowloadUrl) => res(dowloadUrl)).catch((err) => rej(err));
  //       }
  //     );
  //   });
  // }
}
