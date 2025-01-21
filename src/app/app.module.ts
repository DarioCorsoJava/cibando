import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordModule } from 'primeng/password';
import { PaginatorModule } from 'primeng/paginator';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

//Pagine
import { CarouselComponent } from './components/shared/carousel/carousel.component';

//Componenti
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RecipeCardComponent } from './components/shared/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ContactComponent } from './components/contacts/contact/contact.component';
import { AddRecipeComponent } from './components/recipes/add-recipe/add-recipe.component';
import { LoginComponent } from './components/user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeCardComponent,
    DetailComponent,
    RecipesListComponent,
    RegistrationComponent,
    ContactComponent,
    AddRecipeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DropdownModule,
    PaginatorModule,
    FloatLabelModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
