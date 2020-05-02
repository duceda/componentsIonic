import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista', { static: false }) lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  // closeSlidingItems es para cerrar automáticamente un sliding cuando se toca alguna opción
  favorite(user) {
    // console.log(user);
    this.presentToast('Guardado en favoritos');
    this.lista.closeSlidingItems();
  }


  share(user) {
    // console.log(user);
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }


  borrar(user) {
    // console.log(user);
    this.presentToast('Borrado');
    this.lista.closeSlidingItems();
  }

}
