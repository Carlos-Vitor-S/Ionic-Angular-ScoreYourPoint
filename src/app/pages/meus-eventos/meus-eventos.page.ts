import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meus-eventos',
  templateUrl: './meus-eventos.page.html',
  styleUrls: ['./meus-eventos.page.scss'],
})
export class MeusEventosPage implements OnInit {
  events: any[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    this.events = storedEvents;
    console.log(this.events);
  }

  ionViewWillEnter() {
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    this.events = storedEvents;
    console.log(this.events);
  }

}
