import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrarPorNome } from './filtrarPorNome.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabelaListComponent } from './tabela-list.component';
import { FormModule } from '../form/form.module';
import { FormEditarComponent } from '../form/form-editar/form-editar.component';

@NgModule({
    declarations: 
        [
            TabelaListComponent,
            FiltrarPorNome            
        ],
    imports: [ 
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        FormModule,
     ],
    exports: [TabelaListComponent]
})
export class TabelaListModule {}