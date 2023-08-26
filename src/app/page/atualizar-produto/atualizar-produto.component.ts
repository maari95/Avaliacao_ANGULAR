import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/model/produto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent {

  produtoForm!: FormGroup;

  dados: Produto = {
    id: '',
    nome_produto: '',
    preco: ''
  }
  constructor(private route: ActivatedRoute,
     private service: ProdutoService, 
     private formBuilder: FormBuilder,
      private router: Router) { }

  ngOnInit(): void{
    this.inicializaForm();

    const id=this.route.snapshot.paramMap.get('id');

    if(id){
      this.service.getProduto(id).subscribe(
        (response: Produto)=>{
          this.dados=response;
        }
      )

    }
  }
  inicializaForm(){
    this.produtoForm=this.formBuilder.group({
      nome_produto:['',Validators.required],
      preco:['', Validators.required]
    })
  }

  atualizaDados(){
    this.service.update(this.dados, this.dados.id).subscribe(
      (Response: any)=>{
        console.log('Atualizado!', Response)
        alert('Produto atualizado!')
        this.router.navigate(['/']);
      },
      (error: any)=>{
        console.log("Erro ao atualizar", error)
      }
    )
  }
}
