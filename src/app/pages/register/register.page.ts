import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { ToolService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registre_form: FormGroup;
  private pattern: any =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  public id: string;
  public imagen_perfil: any = '/assets/img/default-user.png';
  public imagen_file: any = null;

  constructor(private router: Router, private auth_service: AuthService, private tootsService: ToolService, private general_service: GeneralService) {
    this.registre_form = this.createFormGroup();
  }

  ngOnInit() {}

  createFormGroup() {
    return new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirm_password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  uploadProfileImage() {
    let ele = document.getElementById('getImage' + this.id);
    ele.click();
  }

  // async changeListener(e: any) {
  //   const file = e.target.files[0];
  //   this.imagen_file = file;
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const base64String = reader.result;
  //     this.imagen_perfil = base64String;
  //   };
  //   reader.readAsDataURL(file);
  // }

  // async register() {
  //   const loading = await this.tootsService.createLoading('Cargando');
  //   this.auth_service.registerWithEmail(this.registre_form.value.email, this.registre_form.value.password).then(() => {
  //     this.general_service.postDocument('usuarios', { apellidos: this.registre_form.value.last_name, email: this.registre_form.value.email, foto: '', nombres: this.registre_form.value.first_name }).then(() => {
  //       this.tootsService.dissmissLoading(loading);
  //       this.tootsService.basicSweet('success', 'Registrado', 'Te has registrado exitósamente.');
  //       this.router.navigate(['/home']);
  //     }).catch((err) => {
  //       console.log(err);
  //       this.tootsService.dissmissLoading(loading);
  //       this.tootsService.basicSweet('error', 'Error', "Error al registrar usuario, por favor inténtelo de nuevo.");
  //     });
  //   }).catch((err) => {
  //     this.tootsService.dissmissLoading(loading);
  //     this.tootsService.basicSweet('error', 'Error', err + ", por favor inténtelo de nuevo.");
  //   });
  // }

  get first_name() {
    return this.registre_form.get('first_name');
  }
  get last_name() {
    return this.registre_form.get('last_name');
  }
  get email() {
    return this.registre_form.get('email');
  }
  get password() {
    return this.registre_form.get('password');
  }
  get confirm_password() {
    return this.registre_form.get('confirm_password');
  }
}
