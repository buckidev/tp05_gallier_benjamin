import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { CompteComponent } from './compte/compte.component';

const childRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'compte', component: CompteComponent },
  {
    path: 'store',
    loadChildren: () =>
      import('../store/store.module').then((m) => m.StoreModule),
  },
];

@NgModule({
  declarations: [SigninComponent, CompteComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(childRoutes),
  ],
})
export class ClientModule {}
