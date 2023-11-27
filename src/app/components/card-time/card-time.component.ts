import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-time',
  templateUrl: './card-time.component.html',
  styleUrls: ['./card-time.component.scss'],
})
export class CardTimeComponent implements OnInit {
  @Input() totalJogador: number = 0;
  @Input() imagem: string = '';
  @Input() posicao: string = '';

  aumentarJogador() {
    this.totalJogador++;
  }

  diminuirJogador() {
    if (this.totalJogador > 0) {
      this.totalJogador--;
    }
  }

  constructor() {}

  ngOnInit() {}
}
