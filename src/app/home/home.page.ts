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

  // Esta função limpa todos os valores
   limpaTela() {
    this.conta = "";
   }

   // Esta função exibe os valores da conta
    exibir(num: any) {
      // usa o this para acessar a variável que foi criada acima
      this.conta += num;
    }

    //Esta função executa o resultado da conta
    calculate() {
    this.conta = eval(this.conta);
    } 

    // Funcão +/-, ou seja, troca o sinal
    trocaSinal(){
      // troca de sinal se tiver conta antes
      for(var p = this.conta.length-1; p>0; p--){
        if(this.conta[p] == '+' || this.conta[p] == '-' || this.conta[p] == '*' || this.conta[p] == '/'){
           this.conta = this.conta.split('');//transforma em array
           var operacao = this.conta[p]; //
           var arrayNumero = this.conta.slice(p+1, this.conta.length).join(''); // fazer uma copia do array o último valor digitado
           var arrayConta = this.conta.splice(0, p).join(''); //vai recortar o ultimo número da porcentagem, ou seja, vai deixar só a conta     
           this.conta = arrayConta;
           let numero = Number(arrayNumero) * (-1);
           this.conta += operacao + "(" + numero + ")"; //calcula a porcentagem
           return;
        }
      }
      // troca de sinal sem ter conta antes 
      if(operacao == null){
        this.conta =  Number(this.conta) * (-1); //ao multiplicar por -1, vai trocar o sinal
        return;
      } 
    }

    //Função de apagar um digito 
    apagar(){
      this.conta = this.conta.split(''); //transforma a string em array
      this.conta.pop(); // exclui o último
      this.conta = this.conta.join(''); //volta a ser string, "junta"
    }

    //Função de porcentagem %
    porcentagem(){
      this.exibir('%');
      for(var p = this.conta.length-1; p>0; p--){ //vai percorrer a string de trás para frente
        if(this.conta[p] == '+' || this.conta[p] == '-' || this.conta[p] == '*' || this.conta[p] == '/'){
          this.conta = this.conta.split(''); //transforma em array
          var operacao = this.conta[p]; //o tipo de operação(+,-,,*,/) depois da conta e antes do número da porcentagem
          var arrayPorcentagem = this.conta.slice(p+1, this.conta.length-1).join(''); // fazer uma copia do array entre a operação e o %
          var arrayConta = this.conta.splice(0, p).join(''); //vai recortar o número da porcentagem, ou seja, vai deixar só a conta     
          this.conta = arrayConta + operacao;
          let porcentagem = Number(arrayPorcentagem)/100; //calcula a porcentagem
          this.conta += (eval(arrayConta)) * porcentagem; //calcula a conta com a porcentagem
          return;
        }
    
      }
    }
}
