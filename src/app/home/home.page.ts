import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ //importa do node_modules, só colocar o nome aqui que ele importa sozinho lá em cima
    IonicModule,
    CommonModule 
  ],
})
export class HomePage {
  // é uma classe
  item_selecionado: string = 'desenvolvimento_sistemas'; //não tem let

  selecionarCards(event: any){ //não precisa/pode escrever o function antes
    // tipo de dados any = qualquer um
    this.item_selecionado = event.detail.value; //coloca o this na frente para pegar a variavel de fora da função
    console.log(this.item_selecionado);
  }
}
