import { Injectable } from '@angular/core';
import {
  AlertController,
  ToastController,
  LoadingController,
} from '@ionic/angular';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  presentAlert(
    header: string,
    message: string,
    boton?: string
  ): Promise<boolean> {
    return new Promise((res, rej) => {
      this.alertController
        .create({
          header,
          message,
          backdropDismiss: false,
          buttons: [
            {
              text: boton || 'Aceptar',
              handler: () => {
                res(true);
              },
            },
          ],
        })
        .then((alert) => {
          alert.present();
        });
    });
  }

  presentPrompt(
    header: string,
    message: string,
    boton?: string
  ): Promise<boolean> {
    return new Promise((res, rej) => {
      this.alertController
        .create({
          header,
          message,
          backdropDismiss: false,
          inputs: [
            {
              name: 'name',
              type: 'text',
              placeholder: 'Ingresa un texto',
            },
          ],
          buttons: [
            {
              text: 'Cancelar',
              handler: () => rej(true),
            },
            {
              text: boton || 'Aceptar',
              handler: (r) => {
                res(r.name);
              },
            },
          ],
        })
        .then((alert) => {
          alert.present();
        });
    });
  }

  basicSweet(icon: SweetAlertIcon, title: string, text: string) {
    Swal.fire({
      icon,
      title,
      text,
    });
  }

  presentAlertConfirm(header: string, message: string): Promise<boolean> {
    return new Promise((res, rej) => {
      this.alertController
        .create({
          header: header,
          message,
          backdropDismiss: false,
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                res(false);
              },
            },
            {
              text: 'Aceptar',
              handler: () => {
                res(true);
              },
            },
          ],
        })
        .then((a) => a.present());
    });
  }

  async presentToast(
    duration?: number,
    text?: string
  ): Promise<HTMLIonToastElement> {
    return new Promise(async (res, rej) => {
      const toast = await this.toastController.create({
        message: text || 'Por favor, espere',
        duration: duration || 2000,
      });
      toast.present();
      res(toast);
    });
  }

  public createLoading(
    text?: string,
    duration?: number
  ): Promise<HTMLIonLoadingElement> {
    return new Promise((res, rej) => {
      this.loadingController
        .create({
          message: text || 'Por favor, espere',
          backdropDismiss: false,
          duration: duration || 0,
        })
        .then((l: HTMLIonLoadingElement) => {
          l.present();
          res(l);
        });
    });
  }

  public dissmissLoading(l: HTMLIonLoadingElement): Promise<HTMLIonLoadingElement> {
    return new Promise((res, rej) => {
      l.dismiss();
    });
  }

  formatDate(ts: number, tipo?: number): string {
    var today = new Date(ts);
    var dd: any = today.getDate();
    var mm: any = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var hh: any = today.getHours();
    var MM = today.getMinutes();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (hh < 10) {
      hh = '0' + hh;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    switch (tipo) {
      case 1:
        return yyyy + '-' + mm + '-' + dd;
      case 2:
        return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + MM;
      default:
        return dd + '/' + mm + '/' + yyyy;
    }
  }

  getAge(birthDate: number): number {
    var today = new Date();
    var birthDateO = new Date(birthDate);
    var age = today.getFullYear() - birthDateO.getFullYear();
    var m = today.getMonth() - birthDateO.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateO.getDate())) {
      age--;
    }
    return age;
  }

  formatPrice(numero: number): string {
    return (Math.round(numero * 100) / 100).toFixed(2);
  }
}
