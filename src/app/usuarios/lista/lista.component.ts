import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService
      .getUsers()
      .subscribe((resp: any) => (this.usuarios = resp));
  }
}
