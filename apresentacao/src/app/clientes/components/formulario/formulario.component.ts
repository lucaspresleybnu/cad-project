import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  @Output() formulario = new EventEmitter();

  formularioGroup = new FormGroup({
    nomeCliente: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    dataNascimento: new FormControl(new Date(''), Validators.required),
    rendaMensal: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  formSubmit() {
    if (!this.formularioGroup.invalid) {
      let dadosForm: Cliente = {
        nomeCliente: String(this.formularioGroup.value.nomeCliente),
        cpf: String(this.formularioGroup.value.cpf),
        dataCadastro: this.dateCompleteFormatToBD(new Date()),
        dataNascimento: this.dateFormatToBD(
          this.formularioGroup.value.dataNascimento
        ),
        email: String(this.formularioGroup.value.email),
        rendaMensal: String(this.formularioGroup.value.rendaMensal),
      };
      this.formulario.emit(dadosForm);
    }
  }

  limparCampos() {
    this.formularioGroup.reset();
  }

  currencyFormat(valor: string) {
    return (valor = valor ? valor.replace(/,/g, '').replaceAll('$ ', '') : '');
  }

  dateFormatToBD(date: any) {
    if (date) {
      let d = date.split('/');
      let dataFormatada = `${d[2]}-${d[1]}-${d[0]}`;
      return dataFormatada;
    }
    return '';
  }

  dateCompleteFormatToBD(date: any) {
    if (date) {
      let d: Date = date;
      let ano = d.getFullYear();
      let mes = String(d.getMonth() + 1).padStart(2, '0');
      let dia = String(d.getDate()).padStart(2, '0');
      let horas = String(d.getHours()).padStart(2, '0');
      let minutos = String(d.getMinutes()).padStart(2, '0');
      let segundos = String(d.getSeconds()).padStart(2, '0');
      let dataFormatada = `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
      return dataFormatada;
    }
    return '';
  }
}
