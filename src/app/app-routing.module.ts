import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loggedInGuard } from './logged-in.guard';
import { adminGuard } from './admin.guard';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ContactComponent } from './components/contacts/contact/contact.component';
import { AddRecipeComponent } from './components/recipes/add-recipe/add-recipe.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'ricette', component: RecipesComponent, children: [
    {path: 'dettaglio/:title/:_id', component: DetailComponent},
    {path: 'dettaglio/:_id', component: DetailComponent},
    {path: '', component: RecipesListComponent, pathMatch: 'full'}
  ]},
  {path: 'registrazione', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profilo', component: ProfileComponent, canActivate: [loggedInGuard]},
  {path: 'contatti', component: ContactComponent},
  {path: 'aggiungiRicetta', component: AddRecipeComponent, canActivate: [loggedInGuard, adminGuard]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
