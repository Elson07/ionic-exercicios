import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public titulo: String = "Meu primerio App";
  public imagemRandomica: String = "https://images.unsplash.com/photo-1532704384331-d96a9862ec11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTYyMTcwNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
  public imagemLocal: String = "../assets/icone-celular.png"

  public atualiza(): void {
    this.titulo = "Texto alterado";
  } 


  public acao(): void {
    this.titulo = "Botão clicado";
  } 


}
