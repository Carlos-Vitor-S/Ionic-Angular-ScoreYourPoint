import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3-add-evento',
  templateUrl: './tab3-add-evento.page.html',
  styleUrls: ['./tab3-add-evento.page.scss'],
})
export class Tab3AddEventoPage implements OnInit {
  constructor() {}
  radioSelecionado: boolean = false;
  ngOnInit() {}
  mostrarDiv: boolean = false;

  toggleDiv() {
    this.mostrarDiv = !this.mostrarDiv;
  }
}
