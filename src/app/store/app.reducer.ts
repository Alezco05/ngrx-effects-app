import { ActionReducerMap } from '@ngrx/store';
import * as reducer from './reducers';


export interface AppState {
   usuarios: reducer.UsuariosState,
   usuario: reducer.UsuarioState
}



export const appReducers: ActionReducerMap<AppState> = {
   usuarios: reducer.usuariosReducer,
   usuario: reducer.usuarioReducer
}