import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { JokesService } from "../services/jokes.service";

@Injectable({
  providedIn: 'root'
})
export class JokesCategoriesResolver implements Resolve<string[]> {
  constructor(private chuckNorrisService: JokesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return this.chuckNorrisService.getJokesCategories();
  }
}
