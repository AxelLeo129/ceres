import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToolService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login_form: FormGroup;
  private pattern: any =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private router: Router, private tool_service: ToolService, private auth_service: AuthService) { 
    this.login_form = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup(){
    return new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  async login() {
    this.tool_service.createLoading();
    const user = await this.auth_service.loginWithEmail(this.login_form.value.email, this.login_form.value.password);
    if(user) {
      this.router.navigateByUrl('/menu', { replaceUrl: true });
    } else {
      this.tool_service.presentAlert('Credenciales incorrectas', 'Por favor, ingréselas de nuevo.');
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

  get email() { return this.login_form.get('email'); }
  get password() { return this.login_form.get('password'); }

}
