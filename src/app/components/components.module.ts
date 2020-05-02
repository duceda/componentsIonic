import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { PopoverInfoComponent } from '../components/popover-info/popover-info.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopoverInfoComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
})
export class ComponentsModule { }
