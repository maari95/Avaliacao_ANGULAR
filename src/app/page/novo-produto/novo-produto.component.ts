import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdutoService } from 'src/app/model/produto.service';
import { Produto } from 'src/app/model/produto';

import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent {

  dadosP: Produto = {
    id: '',
    nome_produto: '',
    preco: ''
  };

  constructor(private service: ProdutoService, private router: Router) { }

  submitForm(form: NgForm) {
    const produto = form.value;
    this.service.addProduto(produto).subscribe(
      (response: any) => {
        console.log('Produto Cadastrado!', response);
        alert('Novo produto registrado!')
        this.router.navigate(['/'])
      },
      (error: any) => {
        console.log('erro ao inserir', error)
      }
    )
  }
}

