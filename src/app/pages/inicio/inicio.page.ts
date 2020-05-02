import { DataService } from './../../services/data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  components: Observable<IComponenteMenu[]>;
  
  constructor(private menuController: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getOptionsMenu();
  }

  toggleMenu() {
    this.menuController.toggle();
  }
}


