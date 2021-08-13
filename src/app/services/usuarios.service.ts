import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private url: string = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<Usuario[]>(`${this.url}/users?per_page=6`)
      .pipe(pluck('data'));
  }
}
