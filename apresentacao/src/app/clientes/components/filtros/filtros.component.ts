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
    this.filtros.emit(this.filtrosGroup.value);
  }

  limparCampos(): void {
    this.filtrosGroup.reset();
    this.filtrarClientes();
  }
}
