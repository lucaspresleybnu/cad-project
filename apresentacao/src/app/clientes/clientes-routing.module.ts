import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultaClienteComponent } from './pages/consulta-cliente/consulta-cliente.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'consulta',
      },
      {
        path: 'consulta',
        component: ConsultaClienteComponent,
      },
      {
        path: 'cadastro',
        component: CadastroClienteComponent,
        children: [
          {
            path: ':id',
            component: CadastroClienteComponent,
          },
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
