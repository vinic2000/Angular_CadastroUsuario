import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/tabela-list/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { error } from 'protractor';



@Component({
    selector: 'app-formEditar',
    templateUrl: './form-editar.component.html'
})
export class FormEditarComponent implements OnInit {


    private usuario: Usuario;
    id: string;

    formGroup: FormGroup;

    constructor(
        private formBuild: FormBuilder,
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {

        this.formGroup = this.formBuild.group({
            id: [''],
            nome: ['', Validators.required],
            data: ['asdfa', Validators.required],
            email: ['3324234', Validators.required],
            user: ['', Validators.required],
            senha: ['', Validators.required]
        })

        this.route.params.subscribe(
            (params: any) => {
                this.id = params['id'];
                console.log(this.id);
            }
        );

        this.authService
            .localizarUsuario(this.id)
            .subscribe(
                data => {
                    this.carregarForm(data);
                    console.log(data);
                },
                error => console.log(error),
                () => console.log("esta funciondo como previsto")
            )

        console.log(this.usuario);

    }
   private  carregarForm(usuario: Usuario) {

    console.log();
        this.formGroup.patchValue({
            id: usuario.id,
            nome: usuario.nome,
            dasta: usuario.data,
            email: usuario.email,
            user: usuario.user,
            senha: usuario.senha
        });
    }

    private AlterarUsuario(){
        const usuario:Usuario =  this.formGroup.getRawValue();
        this.authService.editarUsuario(usuario.id.toString(), usuario)
            .subscribe(
                () => {
                    alert("alteraçção realizada com sucesso");
                    this.router.navigateByUrl('lista')},
                error => console.log(error)
            )
    }
}
