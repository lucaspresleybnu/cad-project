import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FiltrosModule } from '../../components/filtros/filtros.module';
import { TabelaModule } from '../../components/tabela/tabela.module';

import { ConsultaClienteComponent } from './consulta-cliente.component';
import { ClientesService } from '../../services/clientes.service';

@NgModule({
    imports: [
        FiltrosModule,
        TabelaModule,
        HttpClientModule
    ],
    declarations: [
        ConsultaClienteComponent,
    ],
    providers: [
        ClientesService
    ]
})
export class ConsultaClienteModule {}