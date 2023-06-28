import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

	conta: any = "";
  resultado: any = "";

  // Esta função limpa todos os valores
   limpaTela() {
    this.conta = "";
    this.resultado ="";
   }

   // Os valores de exibição desta função
    exibir(num: any) {
      // usamos this para acessar a variável que foi criada acima
      this.conta += num;
    }

    //Esta função executa o resultado da expressão e retorna
    calculate() {
    this.conta = eval(this.conta);
    } 

    // Função de apagar um digito 
    // apagar(){
    //   this.conta = this.conta.slice(this.conta.lenght -1)
    // }

    // Função de porcentagem
    // porcentagem(){
    //   //var c = calculate();
    //   for(var p = this.conta.lenght; p=0; p--){
    //     if(this.conta[p] == '+' || this.conta[p] == '-' || this.conta[p] == '*' || this.conta[p] == '/'){

    //     }
    //   }
    // }
}
