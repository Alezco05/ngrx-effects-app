import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario | any;
 
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {   
   }

  ngOnInit(): void {
    this.store.select('usuario').subscribe(({user}) => {
      this.usuario = user;
    })
    this.route.params.subscribe(({id}) => {
      this.store.dispatch(cargarUsuario({id}))
    })
    
  }

}
