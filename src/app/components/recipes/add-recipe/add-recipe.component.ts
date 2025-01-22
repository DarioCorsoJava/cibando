// import { Component, inject } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Recipe } from '../../../models/recipes.model';
// import { RecipeService } from './../../../services/recipe.service';

// @Component({
//   selector: 'app-add-recipe',
//   standalone: false,

//   templateUrl: './add-recipe.component.html',
//   styleUrl: './add-recipe.component.scss'
// })
// export class AddRecipeComponent {
//   routerService = inject(Router);
//   recipeService = inject(RecipeService);
//   ricetta: Recipe;

//   addRecipeForm = new FormGroup({
//       title: new FormControl('', [Validators.required]),
//       description: new FormControl('', [Validators.required]),
//       difficulty: new FormControl('', [Validators.required]),
//       image: new FormControl('', [Validators.required])
//   });

//   onModalSubmit() {
//     this.recipeService.addRecipe(this.addRecipeForm.value).subscribe({
//       next: (res) => {
//         this.ricetta = res;
//       },
//       error: (e) => {
//         console.log(e);
//       }
//     });

//     this.routerService.navigateByUrl("home");
//   }
// }
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RecipeService } from '../../../services/recipe.service';


@Component({
  standalone: false,
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {
  private recipeService = inject(RecipeService);
  private messageService = inject(MessageService);
  private routerService = inject(Router);

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    difficulty: new FormControl(0),
    published: new FormControl(false)
  })

  onSubmit(){
    this.recipeService.addRecipe(this.form.value).subscribe({
      next: res => {
        if(res) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'La ricetta è stata aggiunta!' });
          this.routerService.navigateByUrl('home');
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Spiacenti, si è verificato un errore' });
        }
      },
      error: (e) => console.log(e)
    })
  }
}
