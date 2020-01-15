import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../tabela-list/usuario';

@Injectable({
    providedIn: "root"
})
export class AuthService {

    constructor(private http:HttpClient){}

    linkLista(){
        return this.http.get<Usuario[]>('api/usuarios');
    }

    cadastrarUsuario(usuario: Usuario){
        return this.http.post('api/usuarios',usuario);
    }
    
}