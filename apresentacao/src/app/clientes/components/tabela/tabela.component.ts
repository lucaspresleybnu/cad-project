import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { Cliente } from '../../models/Cliente';
import { ClienteDefault } from '../../enum/cliente.enum';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnChanges {

  @Input() clientes: Cliente[] = [ClienteDefault];
  sortedData: Cliente[] = [ClienteDefault];

  constructor() {}

  ngOnChanges() {
    this.sortedData = this.clientes.slice();
  }

  sortData(sort: Sort) {
    const data = this.clientes.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nomeCliente':
          return this.compare(a.nomeCliente, b.nomeCliente, isAsc);
        case 'cpf':
          return this.compare(a.cpf, b.cpf, isAsc);
        case 'dataCadastro':
          return this.compare(a.dataCadastro, b.dataCadastro, isAsc);
        case 'rendaMensal':
          return this.compare(a.rendaMensal, b.rendaMensal, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
