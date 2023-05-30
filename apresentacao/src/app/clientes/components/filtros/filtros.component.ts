import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent {
  
  @Output() filtros = new EventEmitter();
  
  filtrosGroup = new FormGroup({
    nomeCliente: new FormControl(''),
    cpf: new FormControl(''),
    dataNascimento: new FormControl(''),
  });

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

  filtrarClientes(): void {
    this.filtrosGroup.value.dataNascimento = this.dateFormatToFilter(this.filtrosGroup.value.dataNascimento);
    this.filtros.emit(this.filtrosGroup.value);
  }

  limparCampos(): void {
    this.filtrosGroup.reset();
    this.filtrarClientes();
  }

  dateFormatToFilter(date: any) {
    if (date) {
      let d: Date = date;
      let ano = d.getFullYear();
      let mes = String(d.getMonth() + 1).padStart(2, '0');
      let dia = String(d.getDate()).padStart(2, '0');
      let dataFormatada = `${ano}-${mes}-${dia}`;
      return dataFormatada;
    }
    return '';
  }
}
