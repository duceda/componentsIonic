import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  items = new Array();

  constructor() { }

  ngOnInit() {
  }

  doRefresh(evento) {
    setTimeout(() => {
      this.items = new Array(40);

      evento.target.complete();
    }, 1500);
  }
}
