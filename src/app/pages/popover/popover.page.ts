import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  // event: evento -> Necesita el evento para que el popover se coloque en el sitio desde
  // donde se ha lanzado ese evento
  // backdropDismiss: false -> se usa para que no se cierre aunque pinches fuera
  async mostrarPop(evento) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // onDidDismiss se utiliza para decirle que cuando se haya cerrado el popover haga algo
    // Es más lento
    // const { data } = await popover.onDidDismiss();
    
    // onWillDismiss Cuando esté a punto de cerrarse que lance una acción
    // Aparece nada más cerrarse
    const { data } = await popover.onWillDismiss();
    console.log('Padre, ' + data);
  }

}

