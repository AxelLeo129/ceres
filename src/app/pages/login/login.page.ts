import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToolService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user_field: any = {
      user: 'grupo3',
      password: '123456'
  }

  public login_form: FormGroup;

  constructor(private router: Router, private tool_service: ToolService) { 
    this.login_form = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup(){
    return new FormGroup({
      'user': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  login() {
    if(this.user_field.user == this.login_form.value.user) {
      if(this.user_field.password == this.login_form.value.password) {
        sessionStorage.setItem('auth', 'true');
        this.router.navigate(['menu']);
        return;
      }
    }
    this.tool_service.presentAlert('Error','Credenciales erróneas', 'Aceptar');
  }

  register() {
    this.router.navigate(['/register']);
  }

  get user() { return this.login_form.get('user'); }
  get password() { return this.login_form.get('password'); }

}
