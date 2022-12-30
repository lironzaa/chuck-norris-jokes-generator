import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable, Subject } from "rxjs";
import { Joke, JokesResponse } from "../interfaces/joke";

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private serviceName = 'joke';
  private jokesUpdated = new Subject<{ jokes: Joke[], totalResults: number }>();

  constructor(private http: HttpClient) {
  }

  getJokesCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${ environment.apiUrl }${ this.serviceName }/categories`);
  }

  getRandomJoke(): void {
    this.http.get<Joke>(`${ environment.apiUrl }${ this.serviceName }/random`)
      .subscribe(joke => this.jokesUpdated.next({ jokes: [ joke ], totalResults: 1 }));
  }

  getJokeByCategory(category: string): void {
    this.http.get<Joke>(`${ environment.apiUrl }${ this.serviceName }/random/${ category }`)
      .subscribe(joke => this.jokesUpdated.next({ jokes: [ joke ], totalResults: 1 }));
  }

  getJokeByQuery(query: string): void {
    this.http.get<JokesResponse>(`${ environment.apiUrl }${ this.serviceName }/text/${ query }`)
      .subscribe(jokesResponse => this.jokesUpdated.next({
        jokes: jokesResponse.result,
        totalResults: jokesResponse.total
      }));
  }

  getJokesUpdatedListener(): Observable<{ jokes: Joke[], totalResults: number }> {
    return this.jokesUpdated.asObservable();
  }
}
