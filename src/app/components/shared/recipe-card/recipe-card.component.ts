import { Component, Input, Output, EventEmitter, inject, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  private sanitizerService = inject(DomSanitizer);
  @Input() recipe: Recipe | undefined;
  @Input() page: string;
  @Output() messaggio = new EventEmitter();

  sendTitle(title: string) {
    this.messaggio.emit(title);
  }

  getSanitizedHtml(description: string): SafeHtml {
    const cutDescription = this.shortenDescription(description);

    //Esempio di XSS security breach per testare il sanitizing implicito di Angular e il metodo esposto
    //description = '<button type="submit" onclick="alert(\'successo\');"> Fregato </button>';
    //const sanitizedDescription = this.sanitizerService.bypassSecurityTrustHtml(description);

    const sanitizedDescription = this.sanitizerService.sanitize(SecurityContext.HTML, cutDescription);
    return sanitizedDescription;
  }

  shortenDescription(description: string): string {
    const maxDescriptionLength = 280;
    const lastSpacePosition = description.lastIndexOf(' ', maxDescriptionLength);

    // if(description.length <= maxDescriptionLength) {
    //   return description.slice(0, maxDescriptionLength);
    // }
    // else {
    //   const lastSpacePosition = description.lastIndexOf(' ', maxDescriptionLength);
    //   return description.slice(0, lastSpacePosition);
    // }

    return description.slice(0, description.length <= maxDescriptionLength ? maxDescriptionLength : lastSpacePosition);
  }
}
