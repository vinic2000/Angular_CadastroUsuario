import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './form-cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/vmessage/vmesage.module';
import { FormEditarComponent } from './form-editar/form-editar.component';

@NgModule({
    declarations: [CadastroComponent,FormEditarComponent],
    imports: [ 
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        RouterModule,
        VMessageModule
    ],
    exports: [CadastroComponent,FormEditarComponent]
})
export class FormModule {}