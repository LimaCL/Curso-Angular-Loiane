import { CursosService } from '../cursos/cursos.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../cursos/curso';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor( private service: CursosService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso>{

    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }

    return of({
      id: 0,
      nome: ''
    });
  }


}
