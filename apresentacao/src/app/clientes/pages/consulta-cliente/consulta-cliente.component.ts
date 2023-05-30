import { Component } from '@angular/core';
import { createMask } from '@ngneat/input-mask';
import { debounceTime, first, map } from 'rxjs/operators';

import { ClienteFiltro } from '../../models/ClienteFiltro';
import { Cliente } from '../../models/Cliente';
import { ClientesService } from '../../services/clientes.service';
import { ClienteDefault } from '../../enum/cliente.enum';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.scss']
})
export class ConsultaClienteComponent {

  listaClientes: Cliente[] = [ClienteDefault];

  constructor(private serviceCliente: ClientesService) {}
  
  ngOnInit() {
    this.consultaClientes();
  }

  consultaClientes(filtros: string = '') {
    this.serviceCliente.consultaClientes(filtros)
    .pipe(
      debounceTime(500),
      first(),
      map(clientes => clientes)
    ).subscribe(
      (clientes: Cliente[]) => {
        this.listaClientes = clientes
      }
    );
  }

  filtrosInformados(filtros: ClienteFiltro): void {
    const valoresFiltrados = this.serializeValuesFilter(filtros);
    this.consultaClientes(valoresFiltrados);
  }

  serializeValuesFilter(valuesFilterForm: ClienteFiltro): string {
    const valuesObject = Object.values(valuesFilterForm);
    const propObject = Object.keys(valuesFilterForm);
    let filterArray = [];
    for (let i = 0; i < valuesObject.length; i++) {
      let filter = `${propObject[i]}_like=${valuesObject[i]}`;
      if (valuesObject[i]) filterArray.push(filter);
    }
    return filterArray.join('&');
  }

}
