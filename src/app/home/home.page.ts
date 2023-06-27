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
   clearScreen() {
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
    this.resultado = eval(this.conta);
    } 
}
