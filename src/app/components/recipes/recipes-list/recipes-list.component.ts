import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../../../models/recipes.model';
import { RecipeService } from './../../../services/recipe.service';
import { map, Observable, take } from 'rxjs';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
  @ViewChild('modaleAggiuntaRicetta') modaleAggiuntaRicetta: ElementRef;
  modalService = inject(NgbModal);
  recipeService = inject(RecipeService);
  ricette: Recipe[] = [];
  totaleRicette: Recipe[] = [];
  titoloRicevuto: any;
  page = 1;
  first: number = 0;
  rows: number = 10;
  size: number = 4;

  //Il dollaro è una best practice per le chiamate asincrone
  //Manca il controllo del flusso (.next, .error)
  recipes$ = this.recipeService.getRecipes().pipe(
    map(response => response.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 3)),
    map(response => this.totaleRicette = response)
  );

  constructor() { }

  /* Sezione gestione impaginazione */
  getRecipes() {
    this.recipeService.getRecipes().pipe().subscribe({
      next: (res) => {
        this.ricette = res.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      },
      error: (e) => console.error(e)
    })
  }

  riceviTitolo(event: any) {
    this.titoloRicevuto = event;
  }

  onPageChange(event) {
    event.page = event.page + 1;
    this.page = event.page;
    this.size = event.rows;
  }

  /* Sezione gestione modale */
  onAddRecipeClick() {
    this.openModal(this.modaleAggiuntaRicetta);
  }

  openModal(content: any, id?: string, nome?: string) {
    this.modalService.open(content, {centered: true,
                                    ariaLabelledBy: "Modale di aggiunta ricetta",
                                    size: "lg" }).result
      .then((res) => {
        console.log("Azione");
      })
      .catch((error) => {
        console.log("Errore");
      });
  }
}
