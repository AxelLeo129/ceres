import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { Firestore, doc } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { ToolService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private firestore: Firestore, private nav: NavController, private tool_service: ToolService) { }

  async register({ email, password }) {
    const loader = await this.tool_service.createLoading();
    createUserWithEmailAndPassword(this.auth,email,password).then((res) => {
      signInWithEmailAndPassword(this.auth, email, password).then((res1) => {
        const subs = authState(this.auth).subscribe(l => {
          if(l) {
            setTimeout(() => {
              //doc(this.firestore, )
            }, 300);
          }
        })
      })
    });
  }
 
  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      return null;
    }
  }
 
  logout() {
    return signOut(this.auth);
  }

}
