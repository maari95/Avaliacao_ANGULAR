import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  private baseUrl = 'http://localhost:3000/produto'

  constructor(private http: HttpClient) { }

  addProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto);
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl)
  }

  getProduto(id: string) {
    return this.http.get<Produto>(this.baseUrl + '/' + id)
  }


  update(produto: Produto, id: any): Observable<any> {
    return this.http.put(this.baseUrl + '/' + id, produto)
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id)
  }

}

