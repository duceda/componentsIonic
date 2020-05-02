import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {
  textoBuscar: string;
  albumes: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe((albums: any) => {
      console.log(albums);
      this.albumes = albums;
    });
  }

  buscar(evento) {
    this.textoBuscar = evento.detail.value;

    this.dataService.getAlbums();
  }
}
