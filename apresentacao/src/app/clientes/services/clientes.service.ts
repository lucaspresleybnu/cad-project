import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from '../models/Cliente';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient
  ) { }

  consultaClientes(filtros: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API}/clientes?${filtros}`);
  }

  adicionaCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API}/clientes`, cliente);
  }
}
