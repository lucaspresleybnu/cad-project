import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { InputMaskModule } from '@ngneat/input-mask';
import { FiltrosComponent } from './filtros.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true })
    ],
    exports: [
        FiltrosComponent
    ],
    declarations: [
        FiltrosComponent,
    ]
})
export class FiltrosModule {}