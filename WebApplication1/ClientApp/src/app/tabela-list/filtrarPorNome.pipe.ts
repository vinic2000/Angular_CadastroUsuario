import { Pipe, PipeTransform } from "@angular/core";
import { Usuario } from "./usuario";

@Pipe({ name: 'filtrarPorNome' })

export class FiltrarPorNome implements PipeTransform {
  teste: string = "";

  transform(usuarios: Usuario[], dados: string) {

    if (dados) {
      return usuarios.filter(usuario =>
        usuario.nome.toLowerCase().includes(dados));
    }
    else {
      return usuarios;
    }
  }

}
