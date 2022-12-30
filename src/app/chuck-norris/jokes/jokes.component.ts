import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Joke } from "../interfaces/joke";

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: [ './jokes.component.scss' ]
})
export class JokesComponent implements OnChanges {
  @Input() jokes: Joke[] = [];
  @Input() totalJokes = 0;
  jokeIndex = 0;

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.jokes);
    console.log(this.totalJokes);
    if (changes['totalJokes']) this.jokeIndex = 0;
  }

  onPaginate(itemIndex: number): void {
    this.jokeIndex = itemIndex;
  }
}
