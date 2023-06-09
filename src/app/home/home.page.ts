import { Component, OnInit } from '@angular/core';
//Biblioteta para navegação
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  //O NavController é um objeto da biblioteca de navegação que possui algun metodos para tal
  constructor(private navegacao: NavController) {}

  ngOnInit() {
  }


  abrirBotoes() {
    this.navegacao.navigateForward('botoes')
  }


  abrirLista() {
    this.navegacao.navigateForward('lista')
  }


  //Resebe o valor passado pelo input do ngModel
  public pesquisa: String = "";
  public resultado: String = "";


  recuperar() {
    this.resultado = this.pesquisa;
  }

}
