import { Pipe, PipeTransform } from "@angular/core";
import { Usuario } from "./usuario";

@Pipe({ name: 'filtrarPorNome' })

export class FiltrarPorNome implements PipeTransform {

  transform(usuarios: Usuario[], dados: string) {

    //dados = dados.trim();

    if (dados) {
      return usuarios.filter(usuario => usuario.nome.toLowerCase().includes(dados));
    }
    else {
      return usuarios;
    }
  }

}
