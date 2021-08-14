import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UsuariosService } from 'src/app/services/usuarios.service';
import * as usuarioActions from '../actions';

@Injectable()
export class usuarioEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}
  cargarUSuarios$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      tap(console.log),
      mergeMap((action) =>
        this.usuariosService.getUserById(action.id).pipe(
          map((user: any) =>
            usuarioActions.cargarUsuarioSuccess({ usuario: user })
          ),
          catchError((err) =>
            of(usuarioActions.cargarUsuarioError({ payload: err }))
          )
        )
      )
    )
  );
}
