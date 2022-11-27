import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
titulo="Calculadora"

opernadoA:number=0;
opernadoB:number=0;
resultado:number=0;

sumar():void {
  this.resultado = this.opernadoA+this.opernadoB;
}

}
