import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './curso/cursos.component';
import { DescuentoComponent } from './descuento/descuento.component';
import { DescuentosComponent } from './descuento/descuentos.component';

const routes: Routes = [
  { path: 'curso', component: CursoComponent },
  { path: 'curso/:id', component: CursoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'descuento', component: DescuentoComponent },
  { path: 'descuento/:id', component: DescuentoComponent },
  { path: 'descuentos', component: DescuentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
