import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSortModule } from '@angular/material/sort';

import { TabelaComponent } from './tabela.component';

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
    ]
})
export class TabelaModule {}