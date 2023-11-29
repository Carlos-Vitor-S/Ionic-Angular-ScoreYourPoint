import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-tab2-eventos',
  templateUrl: './tab2-eventos.page.html',
  styleUrls: ['./tab2-eventos.page.scss'],
})
export class Tab2EventosPage implements OnInit {
  eventos = [
    {
      title: 'Partida de Futebol',
      subtitle: 'Só os bons',
      img: '/assets/fotoEvento2.jpg',
      model: 'Amistoso',
      players: 8,
      data: '27 de Novembro, 2023',
      local: 'Estádio Municipal',
      favorite: true
    },
    {
      title: 'Futebol Feminino',
      subtitle: 'Só mulheres',
      img: '/assets/fotoEvento2.jpg',
      model: 'Competição',
      players: 10,
      data: '5 de Dezembro, 2023',
      local: 'Ginásio Esportivo',
      favorite: true
    },
    {
      title: 'Os Pernetas',
      subtitle: 'Lori Ipsum',
      img: '/assets/fotoEvento2.jpg',
      model: 'Competição',
      players: 6,
      data: '15 de Janeiro, 2024',
      local: 'Parque da Cidade',
      favorite: true
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  redirectToEventDetails(eventId: number) {
  }
}
