import { PipesModule } from './../../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchBarPageRoutingModule } from './search-bar-routing.module';
import { SearchBarPage } from './search-bar.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBarPageRoutingModule,
    PipesModule
  ],
  declarations: [SearchBarPage]
})
export class SearchBarPageModule {}
