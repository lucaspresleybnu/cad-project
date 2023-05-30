import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { createMask } from '@ngneat/input-mask';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  @Output() formulario = new EventEmitter();

  emailInputMask = createMask({ alias: 'email' });

  dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd/mm/yyyy',
    parser: (value: string) => {
      const values = value.split('/');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(year, month, date);
    },
  });

  currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: '.',
    digits: 2,
    digitsOptional: false,
    prefix: '$ ',
    placeholder: '0',
  });

  formularioGroup = new FormGroup({
    nomeCliente: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    dataNascimento: new FormControl(new Date(''), Validators.required),
    rendaMensal: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  formSubmit() {
    let dadosForm: Cliente = {
      nomeCliente: String(this.formularioGroup.value.nomeCliente),
      cpf: String(this.formularioGroup.value.cpf),
      dataCadastro: this.dateFormatToBD(new Date(), true),
      dataNascimento: this.dateFormatToBD(
        this.formularioGroup.value.dataNascimento
      ),
      email: String(this.formularioGroup.value.email),
      rendaMensal: this.currencyFormat(String(this.formularioGroup.value.rendaMensal))
    };
    if (!this.formularioGroup.invalid) {
      this.formulario.emit(dadosForm);
    }
  }

  limparCampos() {
    this.formularioGroup.reset();
  }

  currencyFormat(valor: string) {
    return (valor = valor ? valor.replace(/,/g, '').replaceAll('$ ', '') : '');
  }

  dateFormatToBD(date: any, complete: boolean = false) {
    if (date) {
      let d: Date = date;
      let ano = d.getFullYear();
      let mes = String(d.getMonth() + 1).padStart(2, '0');
      let dia = String(d.getDate()).padStart(2, '0');
      let dataFormatada = `${ano}-${mes}-${dia}`;
      if (complete) {
        let horas = String(d.getHours()).padStart(2, '0');
        let minutos = String(d.getMinutes()).padStart(2, '0');
        let segundos = String(d.getSeconds()).padStart(2, '0');
        dataFormatada += ` ${horas}:${minutos}:${segundos}`;
      }
      return dataFormatada;
    }
    return '';
  }
}
