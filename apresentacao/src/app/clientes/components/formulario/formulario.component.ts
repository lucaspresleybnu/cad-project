import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  formularioGroup = new FormGroup({
    nomeCliente: new FormControl(''),
    cpf: new FormControl(''),
    dataNascimento: new FormControl(''),
    rendaMensal: new FormControl(''),
    email: new FormControl(''),
  });

  formSubmit() {

  }

  limparCampos() {
    
  }
}
