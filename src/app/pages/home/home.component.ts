import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  opcion = ['Home', 'Support', 'Contac']
  title!: string
  usuario = 'Angular'
  password = '123456'
  mensaje!: string
  mensajeFalse!: string
  condicion = false
  validacion(user: string, pass: string) {

    if (user == this.usuario && pass == this.password) {
      this.condicion = true
      alert("Credenciales son correctas")
      this.mensaje = "Bienvenido Usuario:" + " " + user
    }
    else {
      this.condicion = false
      this.mensajeFalse = "Credenciales Incorrectas intentalo nuevamente"
    }
  }
}
