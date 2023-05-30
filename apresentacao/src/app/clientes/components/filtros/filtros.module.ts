import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { FiltrosComponent } from './filtros.component';

const maskConfig: Partial<IConfig> = {
    validation: false,
};
  
@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        NgxMaskDirective,
        NgxMaskPipe
    ],
    exports: [
        FiltrosComponent
    ],
    declarations: [
        FiltrosComponent,
    ],
    providers: [
        provideEnvironmentNgxMask(maskConfig)
    ]
})
export class FiltrosModule {}