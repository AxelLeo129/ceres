import { Injectable } from '@angular/core';
import { Firestore, setDoc, doc } from '@angular/fire/firestore';
import { GoogleAuthProvider, Auth, signOut, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private firestore: Firestore) { }

  googleLogin(): Promise<any> {
    return new Promise(async (res, req) => {
      signInWithPopup(this.auth, new GoogleAuthProvider()).then((user) => {
        const connection = doc(this.firestore, 'users', user.user.uid);
        setDoc(connection, { date: new Date().getTime(), email: user.user.email, name: user.user.displayName }).then((response) => {
          res(response);
        }).catch(err => req(err))
      }).catch((err) => { 
        console.log(err);
        req(err);
      })
    })
  }

  logout() {
    signOut(this.auth);
  }

  async getCurrentUser() {
    return new Promise(async (res, rej) => {
      onAuthStateChanged(this.auth, (user) => res(user), (err) => rej(err))
    });
  }

  async loginWithEmail(email: string, password: string): Promise<any> {
    return new Promise(async (res, rej) => { 
        signInWithEmailAndPassword(this.auth, email, password).then((res2) => {
          console.log(res2);
          res(res2);
        }).catch((err) => {
          console.log(err);
          rej(this.firebaseErrors(err.code));
        })
    });
  }

  async recoverPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email).then((res) => console.log(res)).catch((err) => console.log(err));
  }

  async registerWithEmail(email: string, password: string): Promise<any> {
    return new Promise(async (res, rej) => { 
      createUserWithEmailAndPassword(this.auth, email, password).then((user) => {
        const connection = doc(this.firestore, 'users', user.user.uid);
        setDoc(connection, { date: new Date().getTime(), email: user.user.email }).then((response) => {
          res(response);
        }).catch(err => rej(err))
      }).catch((err) => {
        console.log(err);
        rej(this.firebaseErrors(err.code));
      })
    });
  }

  firebaseErrors(code: string): string {
    switch(code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
      case 'auth/weak-password':
        return 'La contraseña es muy débil';
      case 'auth/invalid-email':
        return 'Correo inválido';
      case 'auth/wrong-password':
          return 'Contraseña incorrecta';
      case 'auth/user-not-found':
        return 'Usuario no encontrado';
      default:
        return 'Error en Firebase';
    }
  }

}
