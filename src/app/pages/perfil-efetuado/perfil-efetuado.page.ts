import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-perfil-efetuado',
  templateUrl: './perfil-efetuado.page.html',
  styleUrls: ['./perfil-efetuado.page.scss'],
})
export class PerfilEfetuadoPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  displayName = '';

  constructor() {}

  ngOnInit() {
    let data = localStorage.getItem('user');
    let user = JSON.parse(data!);
    this.displayName = user.displayName;
  }

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
