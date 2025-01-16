import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RecipeService } from '../../services/recipe.service';
import { UserService } from './../../services/user.service';

import { Recipe } from '../../models/recipes.model';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('modaleRegistrazione') modaleRegistrazione: ElementRef;
  datiRegistrazione = {};
  ricette: Recipe[] = [];
  evidenziato = false;
  idModale = '';
  nomeModale = '';


  constructor(private recipeService: RecipeService,
              private userService: UserService,
              private modalService: NgbModal) {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res.sort((a, b) => b._id - a._id).slice(0, 4);
      },
      error: (e) => console.error(e)
    })

    this.userService.datiUtente.subscribe(res => {
      localStorage.setItem('datiReg', JSON.stringify(res));
    });
  }

  ngAfterViewInit(): void {
    if(localStorage.getItem('datiReg')) {
      this.datiRegistrazione = JSON.parse(localStorage.getItem('datiReg'));
      localStorage.removeItem('datiReg');
      this.openModal(this.modaleRegistrazione);
    }
  }

  onEvidenziazione() {
    this.evidenziato = !this.evidenziato;
  }

  openModal(content: any, id?: string, nome?: string, cognome?: string) {
    this.idModale = id;
    this.nomeModale = nome;
    this.modalService.open(content, {centered: true,
                                    ariaLabelledBy: "Modale di benvenuto",
                                    size: "lg" }).result
      .then((res) => {
        console.log("Azione");
      })
      .catch((error) => {
        console.log("Errore");
      });
  }

  // closeModal() {
  //   this.modalService.dismissAll();
  // }
}
