import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  fechaNacim = new Date();
  customDate;
  customPickerOptions;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log(evento);
          console.log('Clicked Save!');
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          // Return false para que no se cierre cuando se haga click fuera
          return false;
        }
      }]
    };
  }

  public cambioFecha(event) {
    console.log('Date', new Date(event.detail.value));
  }
}
