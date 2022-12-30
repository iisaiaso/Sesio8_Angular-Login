import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Opciones = ['Home', 'Support', 'Contac']
  elem!: string
  title!: string
  usuario = 'Angular'
  password = '123456'

  validacion(user: string, pass: string) {

    if (user == this.usuario && pass == this.password) {
      alert("Bienvenido: " + user)
      for (let i = 0; i < this.Opciones.length; i++) {
       this.elem = this.Opciones[i];
      }
    }
    else {
      alert("Datos Incorrectos")
    }
  }
}
