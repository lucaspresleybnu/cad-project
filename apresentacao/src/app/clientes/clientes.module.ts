import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ConsultaClienteModule } from './pages/consulta-cliente/consulta-cliente.module';
import { CadastroClienteModule } from './pages/cadastro-cliente/cadastro-cliente.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ClientesRoutingModule,
        ConsultaClienteModule,
        CadastroClienteModule
    ]
})
export class ClientesModule {}