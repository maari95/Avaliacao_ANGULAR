import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './page/produto/produto.component';
import { NovoProdutoComponent } from './page/novo-produto/novo-produto.component';
import { AtualizarProdutoComponent } from './page/atualizar-produto/atualizar-produto.component';
import { HttpClientModule } from '@angular/common/http';

// Importação para formulário
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Configuração de login
import { configuracao } from './configuracao';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './page/login/login.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    NovoProdutoComponent,
    AtualizarProdutoComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(configuracao)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
