import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgardService } from './model/authgard.service';
import { AtualizarProdutoComponent } from './page/atualizar-produto/atualizar-produto.component';
import { LoginComponent } from './page/login/login.component';
import { NovoProdutoComponent } from './page/novo-produto/novo-produto.component';
import { ProdutoComponent } from './page/produto/produto.component';

const routes: Routes = [
  {path:'', component: ProdutoComponent, canActivate:[AuthgardService]},
  {path: 'novo', component: NovoProdutoComponent},
  {path: 'atualizar/:id', component:AtualizarProdutoComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
