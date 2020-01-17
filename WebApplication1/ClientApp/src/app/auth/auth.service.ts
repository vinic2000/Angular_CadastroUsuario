import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
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

    DeletarUsuario(id:string){

        return this.http.delete('api/usuarios/'+id);
    }

    editarUsuario(id:string, usuario:Usuario){
        return this.http.put('api/usuarios/'+id, usuario);
    }
    localizarUsuario(id:string){
        return this.http.get<Usuario>('api/usuarios/'+id);

    }
    
}
