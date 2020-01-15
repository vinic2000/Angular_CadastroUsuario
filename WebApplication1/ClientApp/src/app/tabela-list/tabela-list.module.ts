import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaListComponent } from "./TabelaListComponent";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FiltrarPorNome } from './filtrarPorNome.pipe';

@NgModule({
    declarations: 
        [
            TabelaListComponent,
            FiltrarPorNome
        ],
    imports: [ 
        CommonModule 
     ],
    exports: [TabelaListComponent]
})
export class TabelaListModule {}