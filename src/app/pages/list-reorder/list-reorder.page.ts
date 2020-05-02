import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Wonderwoman'];

  constructor() { }

  ngOnInit() {
  }

  reordenarLista(evento) {
    console.log(evento);

    // Esto debería hacerlo automáticamente, pero si no lo hace hay que hacer esto
    const itemMover = this.personajes.splice(evento.detail.from, 1)[0];
    this.personajes.splice(evento.detail.to, 0, itemMover);

    // el método complete es el que finaliza el drag and drop
    evento.detail.complete();
  }

  showConsoleArray() {
    console.log(this.personajes);
  }

}
