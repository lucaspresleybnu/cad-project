import { Component } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { ClientesService } from '../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent {

  constructor(
    private serviceClientes: ClientesService,
    private router: Router
  ) {}

  formularioSubmit(cliente: Cliente) {
    this.serviceClientes.adicionaCliente(cliente).subscribe(
      _ => {
        this.router.navigate(['/clientes/consulta']);
      }
    );
  }
}
