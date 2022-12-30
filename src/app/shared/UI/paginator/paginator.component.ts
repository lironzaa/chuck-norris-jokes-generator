import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: [ './paginator.component.scss' ]
})
export class PaginatorComponent {
  @Input() currentItem = 0;
  @Input() totalItems = 0;
  @Output() previousPage = new EventEmitter<number>();
  @Output() nextPage = new EventEmitter<number>();

  onPaginateBack(): void {
    this.currentItem--;
    this.previousPage.next(this.currentItem - 1);
  }

  onPaginateForward(): void {
    this.currentItem++;
    this.nextPage.next(this.currentItem - 1);
  }
}
