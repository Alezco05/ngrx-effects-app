import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UsuariosService } from 'src/app/services/usuarios.service';
import * as usuariosActions from '../actions';

@Injectable()
export class usuariosEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}
  cargarUSuarios$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      tap(console.log),
      mergeMap(() =>
        this.usuariosService.getUsers().pipe(
          map((users: any) =>
            usuariosActions.cargarUsuariosSuccess({ usuarios: users })
          ),
          catchError((err) =>
            of(usuariosActions.cargarUsuariosError({ payload: err }))
          )
        )
      )
    )
  );
}
