import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    /* this.usuariosService
      .getUsers()
      .subscribe((resp: any) => (this.usuarios = resp)); */
      this.store.select('usuarios').subscribe(({users, loading, error}) => {
        this.usuarios = users;
        this.loading = loading;
        this.error = error;
      });
      this.store.dispatch(cargarUsuarios());
  }
}
