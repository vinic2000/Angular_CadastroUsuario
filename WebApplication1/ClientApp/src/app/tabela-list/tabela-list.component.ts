import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela-list.component.html'
})
export class TabelaListComponent implements  OnInit{
  
  usuarios:Usuario[] = [];
  
  tittle: string = "teste de mundo vai que funciona";
  
  filter:string;
  
  constructor(private authService: AuthService) { }
  
  private getUsuarios() {
    
    this.authService
    .linkLista()
    .subscribe(
      data => this.usuarios= data,
      error => console.log(error),
      () => console.log(this.usuarios)
      );
    }

    ngOnInit(): void {
      this.getUsuarios();
    }
  }
  