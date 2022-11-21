import { HomeComponent } from './../../../rotas/src/app/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full',  redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(cursos => cursos.CursosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
