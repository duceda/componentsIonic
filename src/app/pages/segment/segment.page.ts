import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment, { static: false }) segmento: IonSegment;
  superheroes: Observable<any>;
  valorSegmento: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segmento.value = 'Todos';
    this.superheroes = this.dataService.getSuperHeroes();
  }

  segmentChanged(evento) {

    // Para que la pipe devuelva todos en lugar de filtrar por 'todos'
    if ( evento.detail.value === 'todos') {
      this.valorSegmento = '';
    } else {
      this.valorSegmento = evento.detail.value;
    }


    console.log(this.valorSegmento);
  }

}
