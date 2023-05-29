import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Cliente {
  nome: string;
  cpf: string;
  dataCadastro: string;
  rendaMensal: string;
}

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {
  desserts: Cliente[] = [
    {nome: 'Frozen yogurt', cpf: '10810938979', dataCadastro: '28/05/2023', rendaMensal: '6000'},
    {nome: 'Ice cream sandwich', cpf: '11111111111', dataCadastro: '15/03/2023', rendaMensal: '7000'},
    {nome: 'Eclair', cpf: '33333333333', dataCadastro: '01/05/2023', rendaMensal: '8000'},
    {nome: 'Cupcake', cpf: '88888888888', dataCadastro: '20/02/2023', rendaMensal: '6500'},
    {nome: 'Gingerbread', cpf: '99999999999', dataCadastro: '11/05/2023', rendaMensal: '9000'}
  ];

  sortedData: Cliente[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nome':
          return this.compare(a.nome, b.nome, isAsc);
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
