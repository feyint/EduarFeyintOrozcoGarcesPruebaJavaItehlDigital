import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './curso/cursos.component';
import { DescuentoComponent } from './descuento/descuento.component';
import { DescuentosComponent } from './descuento/descuentos.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    CursosComponent,
    DescuentoComponent,
    DescuentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
