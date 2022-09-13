import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { recipes } from '../../utilities/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cerecipes',
  templateUrl: './cerecipes.page.html',
  styleUrls: ['./cerecipes.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CErecipesPage implements OnInit {

  public recetas_form: FormGroup;
  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  public id: string;
  public imagen_default: any = '/assets/img/default_image.jpg';
  public imagen_receta: any = null;


  constructor(private generalService: GeneralService) {
    this.recetas_form = this.createFormGroup();
  }

  ngOnInit(){
  }

  createFormGroup(){
    return new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'contenido': new FormControl('', [Validators.required]),
    })
  }

  sendReceta(){
    this.generalService.uploadFile(this.imagen_receta, 'recetas', new Date().getTime().toString()).then((res)=>{
      this.generalService.postDocument("recetas", {nombre: this.recetas_form.value.nombre, img: res, contenido: this.recetas_form.value.contenido}).then(()=>{console.log('enviado')}).catch(e=>{console.log(e)});
    })
    
  }

  uploadProfileImage() {
    let ele = document.getElementById('getImage' + this.id);
    ele.click();
  }
  async changeListener(e: any) {
    const file = e.target.files[0];
    this.imagen_receta = file;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      this.imagen_default = base64String;
    };
    reader.readAsDataURL(file);
  }

}
