import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Ajoutez ceci pour activer ngModel


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


// @NgModule({
//   declarations: [AppComponent, LoginComponent],
//   imports: [BrowserModule, AppRoutingModule, FormsModule],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
