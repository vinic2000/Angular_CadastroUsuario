import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../tabela-list/usuario';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cad',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm:FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private authServer: AuthService,
    private router:Router
  ) { }

    ngOnInit(): void {

        this.cadastroForm = this.formBuild.group({

            nome:['',
              Validators.required
            ],
            data: ['',
              Validators.required
            ],
            email: ['',
              Validators.required
            ],
            user: ['',
              Validators.required
            ],
            senha: ['',
              Validators.required
            ]
        });
     }

     cadastrar(){
         
        let usuario = this.cadastroForm.getRawValue() as Usuario;
        console.log(usuario);

        this.authServer
            .cadastrarUsuario(usuario)
            .subscribe(
              () => {
                console.log("funcionou");
                this.router.navigate(['lista']);
              },
                err => console.log(err));
     }
}
