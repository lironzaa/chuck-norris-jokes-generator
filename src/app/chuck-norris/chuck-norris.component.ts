import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { JokesService } from "./services/jokes.service";
import { Joke } from "./interfaces/joke";

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: [ './chuck-norris.component.scss' ]
})
export class ChuckNorrisComponent implements OnInit, OnDestroy {
  jokesCategories: string[] = [];
  jokes: Joke[] = [];
  totalJokes!: number;
  jokesForm!: FormGroup;
  searchByCategory = true;
  isLoading = false;
  private jokesSub!: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder,
              private jokesService: JokesService) {
  }

  ngOnInit(): void {
    this.jokesCategories = this.activatedRoute.snapshot.data['jokesCategories'];
    this.initForm();
    this.initSubs();
  }

  initSubs(): void {
    this.jokesSub = this.jokesService.getJokesUpdatedListener()
      .subscribe(jokesUpdated => {
        this.jokes = jokesUpdated.jokes;
        this.totalJokes = jokesUpdated.totalResults;
        this.isLoading = false;
      });
  }

  initForm(): void {
    this.jokesForm = this.fb.group({
      category: [ null ],
      query: [ null ],
    });
  }

  toggleSearchBy(searchBy: string): void {
    switch (searchBy) {
      case 'category':
        this.searchByCategory = true;
        this.jokesForm.get('query')?.clearValidators();
        break;
      case 'text':
        this.searchByCategory = false;
        this.jokesForm.get('query')?.setValidators([ Validators.required, Validators.minLength(3) ]);
        break;
    }
    this.jokes = [];
    this.jokesForm.get('query')?.updateValueAndValidity();
  }

  onSubmit(): void {
    this.isLoading = true;
    const formCategory = this.jokesForm.value.category;
    if (this.searchByCategory) {
      if (formCategory) this.jokesService.getJokeByCategory(formCategory);
      else this.jokesService.getRandomJoke();
    } else this.jokesService.getJokeByQuery(this.jokesForm.value.query);
  }

  ngOnDestroy(): void {
    this.jokesSub.unsubscribe();
  }
}
