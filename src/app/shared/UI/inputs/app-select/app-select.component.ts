import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './app-select.component.html',
  styleUrls: [ './app-select.component.scss' ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class AppSelectComponent {
  @Input() items: any[] = [];
  @Input() customFormControlName: string = '';
}
