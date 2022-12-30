import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'chuck-norris';

  ngOnInit(): void {
    const array = [ 1, 2, 3, 6, 4, 10, 4 ];
    const result = this.sumArray(array);
  }

  sumArray(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
  }
}
