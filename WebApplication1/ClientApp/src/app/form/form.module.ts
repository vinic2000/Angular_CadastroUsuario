import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CadastroComponent],
    imports: [ 
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [CadastroComponent]
})
export class FormModuçe {}