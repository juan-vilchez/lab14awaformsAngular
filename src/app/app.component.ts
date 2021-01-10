import { Component,OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { logging } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular13';
private isValidEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
private passwordFormat:any= /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/;
  
angForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.createForm();
  } 

  createForm(){
    this.angForm = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido1: ['',[Validators.required]],
      apellido2: ['',[Validators.required]],
      dia: ['',[Validators.required]],
      mes: ['',[Validators.required]],
      anio: ['',[Validators.required, Validators.minLength(4),Validators.maxLength(4), Validators.min(1950), Validators.max(2021) ]],
      email: ['',[Validators.required, Validators.email,Validators.minLength(6), Validators.pattern(this.isValidEmail) ]],
      pwd:['',[Validators.required,Validators.minLength(8), Validators.maxLength(20), Validators.pattern(this.passwordFormat)]],
      pwdv:['',[Validators.required,Validators.minLength(8), Validators.maxLength(20), Validators.pattern(this.passwordFormat)]]
   
    });
  }
  onClickSubmit(email, pwd){
    //alert('Tu email es: '+ email);

  }

  ngOnInit(){

  }

  onSaveForm(){
    if(this.angForm.valid){
      this.onResetForm();
      console.log('Es válido');

    }else{
      console.log('No es Válido');
    }

  }

  onResetForm(){
    this.angForm.reset();
  }


  getErrorMessage(field: string){
    let message;
    if(this.angForm.get(field)?.errors?.required){
      message="El campo es requerido";
    }else if(this.angForm.get(field)?.hasError('pattern')){
      message="No es un Email Válido";
    }
    return message;
  }

  getErrorMessageNames(field: string){
    let message;
    if(this.angForm.get(field)?.errors?.required){
      message="El campo es requerido";
    }else if(this.angForm.get(field)?.hasError('pattern')){
      message="Solo se aceptan letras";
    }
    return message;
  }

  getErrorMessagePasswordFormat(field: string){
    let message;
    if(this.angForm.get(field)?.errors?.required){
      message="El campo es requerido";
    }else if(this.angForm.get(field)?.hasError('minlength')){
      message="Debe contener por lo menos 8 caracteres";
    }else if(this.angForm.get(field)?.hasError('maxlength')){
      message="Debe contener como maximo 20 caracteres";
    }else if(this.angForm.get(field)?.hasError('pattern')){
      message="Ingrese una contraseña válida";
    }
    return message;
  }
  
  getErrorMessageDia(field: string){
    let message;
    if(this.angForm.get(field)?.errors?.required){
      message="El campo es requerido";
    }
    return message;
  }
  getErrorMessageMes(field: string){
    let message;
    if(this.angForm.get(field)?.errors?.required){
      message="El campo es requerido";
    }
    return message;
  }
  getErrorMessageAnio(field: string){
    let message;
    if(this.angForm.get(field)?.errors?.required){
      message="El campo es requerido";
    }else if(this.angForm.get(field)?.hasError('maxlength')){
      message="No es un año válido";
    }else if(this.angForm.get(field)?.hasError('minlength')){
      message="No es un año válido";
    }else if(this.angForm.get(field)?.hasError('max')){
      message="No es un año válido";
    }else if(this.angForm.get(field)?.hasError('min')){
      message="No es un año válido";
    }
    return message;
  }


  isValidField(field:string):boolean{
    return!!(
      (this.angForm.get(field)?.touched || this.angForm.get(field)?.dirty) && !this.angForm.get(field)?.valid
    );
  }

  getErrorMessagePasswordFormatValid(field:string){
    let message;
    if(this.angForm.get(field)?.errors?.required){
      message="El campo es requerido";
    }else if(this.angForm.get(field)?.hasError('minlength')){
      message="Debe contener por lo menos 8 caracteres";
    }else if(this.angForm.get(field)?.hasError('maxlength')){
      message="Debe contener como maximo 20 caracteres";
    }else if(this.angForm.get(field)?.hasError('pattern')){
      message="Ingrese una contraseña válida";
    }else if( field !== this.angForm.get('pwd')?.value){
      message="Las contraseñas no coinciden";
    }
    return message;
  }
  
}

