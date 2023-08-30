import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseloginService {

  constructor(private autenticar: AngularFireAuth) { }

  // Metodo autenticar email e senha
  login(email: string, senha: string){
    return this.autenticar.signInWithEmailAndPassword(email, senha)
  }

  //Metodo de registro de usuário (a ser implementado)
  registro(email: string, senha: string){
    return this.autenticar.createUserWithEmailAndPassword(email, senha)
  }

  validarToken():boolean{
    const token = localStorage.getItem('token');
    const expiracao = localStorage.getItem('expiracao');

    if (!token || !expiracao){
      return false;
    }
    return new Date() < new Date(expiracao);
  }


  // Metodo de logOff 
  /*  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiracao');
    this.autenticar.signOut()
      .then(() => {
        console.log('Usuário desconectado com sucesso.');
        // Aqui você pode redirecionar o usuário para a página de login ou fazer outra ação após o logout.
      })
      .catch(error => {
        console.error('Erro ao desconectar o usuário:', error);
      });
  }  */
  
}
