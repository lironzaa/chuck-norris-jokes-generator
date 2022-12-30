import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './app-input-text.component.html',
  styleUrls: [ './app-input-text.component.scss' ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class AppInputTextComponent {
  @Input() customFormControlName: string = '';
}
