import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      let d = date.split('/');
      let dataFormatada = `${d[2]}-${d[1]}-${d[0]}`;
      return dataFormatada;
    }
    return '';
  }
}
