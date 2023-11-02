import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // attribut

  email="";
  password="";
  nom = "";
  prenom = "";
  telephone = "";
  changeForm=true;
  // test =false;

  // methodes
  validationControle(){
    if (this.email == "" || this.password == "" ) {
      Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'Veuillez saisir tous les champs',
      })
      
    }else{
      Swal.fire({
        icon: 'success',
        title: 'Thanks',
        text: 'Connexion faite avec succès',
      })

    }

  }

  formregister() {

    if (this.nom == "" || this.prenom == "" || this.email == "" || this.password == "" || this.telephone == "") {
      Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'Veuillez saisir tous les champs',
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Thanks',
        text: 'Connexion faite avec succès',
      })
      this.showForm()

    }

  }


  showForm(){
    this.changeForm=!this.changeForm;
    this.nom="";
    this.prenom="";
    this.telephone="";
    this.email="";
    this.password="";
  }


}




