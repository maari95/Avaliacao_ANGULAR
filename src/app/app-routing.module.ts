import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgardService } from './model/authgard.service';
import { AtualizarProdutoComponent } from './page/atualizar-produto/atualizar-produto.component';
import { LoginComponent } from './page/login/login.component';
import { NovoProdutoComponent } from './page/novo-produto/novo-produto.component';
import { ProdutoComponent } from './page/produto/produto.component';
import { HomeComponent } from './page/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent, canActivate:[AuthgardService]},
  {path:'produto', component: ProdutoComponent, canActivate:[AuthgardService]},
  {path: 'novo', component: NovoProdutoComponent, canActivate:[AuthgardService]},
  {path: 'atualizar/:id', component:AtualizarProdutoComponent, canActivate:[AuthgardService]},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
