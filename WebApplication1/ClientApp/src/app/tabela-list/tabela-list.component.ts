import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela-list.component.html'
})
export class TabelaListComponent implements  OnInit, OnChanges{
 
  
  usuarios:Usuario[] = [];
  filter:string;
  private teste:Usuario;
  
  constructor(
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute) { }

  private getUsuarios() {
    this.authService
    .linkLista()
    .subscribe(
      data => this.usuarios= data,
      error => console.log(error)
      );
    }

    ngOnInit(): void {
      this.getUsuarios();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes.usuarios){
      this.getUsuarios();
    }
  }

   excluir(id:number){

     this.authService
       .DeletarUsuario(id.toString())
       .subscribe(
         () => {
           console.log("funcionou verifique nalista se o ID " + id + " ainda existe na lista")
            this.getUsuarios();
          },
         error => console.log(error)
        )
    }

    editar(id:string){
      this.router.navigate(['editar',id]);
    }
}

