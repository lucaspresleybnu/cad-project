import { NgModule, LOCALE_ID, } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';

import { TabelaComponent } from './tabela.component';

import ptBr  from '@angular/common/locales/pt';

registerLocaleData(ptBr);
@NgModule({
    imports: [
        CommonModule,
        MatSortModule
    ],
    exports: [
        TabelaComponent
    ],
    declarations: [
        TabelaComponent,
    ],
    providers:    [
        { provide: LOCALE_ID, useValue: 'pt' },
    ],
})
export class TabelaModule {}