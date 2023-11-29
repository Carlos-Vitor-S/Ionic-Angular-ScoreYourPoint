import { Component, OnInit, Input  } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})export class CardComponent  implements OnInit {
  eventId;
  
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';
  @Input() model: string = '';
  @Input() players: number = 0;
  @Input() data: string = '';
  @Input() local: string = '';
  @Input() favorite: boolean = false;


  constructor(private router: Router) {
    this.eventId = uuidv4();
  }

  redirectToEventDetails(eventId: number) {
    this.router.navigate(['/event', eventId]); // Navega para a rota de detalhes do evento com o ID do evento
  }

  ngOnInit() {}

  // No seu componente correspondente (app-card ou EventoComponent)
  participateInEvent(eventData: any) {

    eventData = {
      title : this.title,
      subtitle: this.subtitle,
      img: this.img,
      model: this.model,
      players: this.players,
      data: this.data,
      local: this.local,
      favorite: this.favorite,
    }

    // Obter os eventos do localStorage ou criar um novo array se não existir
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]');

    // Adicionar o novo evento ao array
    storedEvents.push(eventData);

    // Atualizar os eventos no localStorage
    localStorage.setItem('events', JSON.stringify(storedEvents));

    this.router.navigate(['/meus-eventos']);
  }

}
