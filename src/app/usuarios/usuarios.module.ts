import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    UsuarioComponent,
    ListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsuarioComponent,
    ListaComponent
  ]
})
export class UsuariosModule { }
