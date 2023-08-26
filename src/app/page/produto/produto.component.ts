import { Component } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/model/produto.service';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  produtos: Produto[] = []

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.listarProduto();
  }

  listarProduto(): void {
    this.service.getProdutos().subscribe(
      produto => {
        this.produtos = produto;
      },
      error => {
        console.log(error)
      }
    )
  }

  deletar(id: any) {
    this.service.excluir(id).subscribe(
      () => {
        console.log('Pessoa removida com sucesso')
      },
      (error) => {
        console.log("Erro ao remover", error)
      }
    );
    this.listarProduto
  }

}
