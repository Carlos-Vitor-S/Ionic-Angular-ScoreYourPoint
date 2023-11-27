import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3-add-evento',
  templateUrl: './tab3-add-evento.page.html',
  styleUrls: ['./tab3-add-evento.page.scss'],
})
export class Tab3AddEventoPage implements OnInit {
  //time azul
  cardsTime1 = [
    { imagem: '/assets/jogadores/timeAzul/goleiro.png', posicao: 'Goleiro' },
    { imagem: '/assets/jogadores/timeAzul/zagueiro.png', posicao: 'Zagueiro' },
    { imagem: '/assets/jogadores/timeAzul/lateral.png', posicao: 'Lateral' },
    {
      imagem: '/assets/jogadores/timeAzul/meioCampo.png',
      posicao: 'Meio Campo',
    },
    { imagem: '/assets/jogadores/timeAzul/atacante.png', posicao: 'Atacante' },
  ];
  //time Vermelho
  cardsTime2 = [
    {
      imagem: '/assets/jogadores/timeVermelho/goleiro.png',
      posicao: 'Goleiro',
    },
    {
      imagem: '/assets/jogadores/timeVermelho/zagueiro.png',
      posicao: 'Zagueiro',
    },
    {
      imagem: '/assets/jogadores/timeVermelho/lateral.png',
      posicao: 'Lateral',
    },
    {
      imagem: '/assets/jogadores/timeVermelho/meioCampo.png',
      posicao: 'Meio Campo',
    },
    {
      imagem: '/assets/jogadores/timeVermelho/atacante.png',
      posicao: 'Atacante',
    },
  ];

  constructor() {}

  radioSelecionado: boolean = false;
  ngOnInit() {}
  mostrarDiv: boolean = false;

  toggleDiv() {
    this.mostrarDiv = !this.mostrarDiv;
  }
}
