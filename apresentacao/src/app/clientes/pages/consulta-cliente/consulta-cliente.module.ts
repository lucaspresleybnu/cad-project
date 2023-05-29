import { NgModule } from '@angular/core';

import { FiltrosModule } from '../../components/filtros/filtros.module';
import { TabelaModule } from '../../components/tabela/tabela.module';

import { ConsultaClienteComponent } from './consulta-cliente.component';

@NgModule({
    imports: [
        FiltrosModule,
        TabelaModule
    ],
    declarations: [
        ConsultaClienteComponent,
    ]
})
export class ConsultaClienteModule {}