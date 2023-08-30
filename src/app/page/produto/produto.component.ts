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
  autenticar: any;

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
  

  //Metodo de logout
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiracao');
    this.autenticar.signOut()
      .then(() => {
        console.log('Usuário desconectado com sucesso.');
        // Aqui você pode redirecionar o usuário para a página de login ou fazer outra ação após o logout.
      })
      .catch((error: any) => {
        console.error('Erro ao desconectar o usuário:', error);
      });
  }
}
