import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

const childRoutes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [CatalogueComponent, HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(childRoutes),
  ],
})
export class StoreModule {}
