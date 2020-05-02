import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IComponenteMenu } from 'src/app/interfaces/IComponenteMenu';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  components: Observable<IComponenteMenu[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getOptionsMenu();
  }

}
