import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormularioModule } from '../../components/formulario/formulario.module';
import { CadastroClienteComponent } from './cadastro-cliente.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormularioModule
    ],
    declarations: [
        CadastroClienteComponent
    ]
})
export class CadastroClienteModule {}