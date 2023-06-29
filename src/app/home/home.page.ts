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
    this.resultado = "";
   }

   // Esta função exibe os valores da conta e o resultado
    exibir(num: any) {
      // usa o this para acessar a variável que foi criada acima
      this.conta += num;
      this.resultado = eval(this.conta);
    }

    //Esta função mostra a conta como resultado final e o resultado some
    igual() {
      this.conta = eval(this.conta);
      this.resultado = "";
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
           this.resultado = eval(this.conta);
           return;
        }
      }
      // troca de sinal sem ter conta antes 
      if(operacao == null){
        this.conta =  Number(this.conta) * (-1); //ao multiplicar por -1, vai trocar o sinal
        this.resultado = eval(this.conta);
        return;
      } 
    }

    //Função de apagar um digito 
    apagar(){
      this.conta = this.conta.split(''); //transforma a string em array
      this.conta.pop(); // exclui o último
      this.conta = this.conta.join(''); //volta a ser string, "junta"
      this.resultado = eval(this.conta);
    }

    //Função de porcentagem %
    porcentagem(){
      this.conta = this.conta + '%';
      for(var p = this.conta.length-1; p>0; p--){ //vai percorrer a string de trás para frente
        if(this.conta[p] == '+' || this.conta[p] == '-' || this.conta[p] == '*' || this.conta[p] == '/'){
          this.conta = this.conta.split(''); //transforma em array
          var operacao = this.conta[p]; //o tipo de operação(+,-,,*,/) depois da conta e antes do número da porcentagem
          var arrayPorcentagem = this.conta.slice(p+1, this.conta.length-1).join(''); // fazer uma copia do array entre a operação e o %
          var arrayConta = this.conta.splice(0, p).join(''); //vai recortar o número da porcentagem, ou seja, vai deixar só a conta     
          this.conta = arrayConta + operacao;
          let porcentagem = Number(arrayPorcentagem)/100; //calcula a porcentagem
          this.conta += (eval(arrayConta)) * porcentagem; //calcula a conta com a porcentagem
          this.resultado = eval(this.conta);
          return;
        } 
      }
    }
}
