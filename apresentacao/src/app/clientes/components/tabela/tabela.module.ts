import { NgModule, LOCALE_ID, } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import ptBr  from '@angular/common/locales/pt';

import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';

import { TabelaComponent } from './tabela.component';

const maskConfig: Partial<IConfig> = {
    validation: false,
};

registerLocaleData(ptBr);
@NgModule({
    imports: [
        CommonModule,
        MatSortModule,
        NgxMaskDirective,
        NgxMaskPipe
    ],
    exports: [
        TabelaComponent
    ],
    declarations: [
        TabelaComponent,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
        provideEnvironmentNgxMask(maskConfig)
    ],
})
export class TabelaModule {}