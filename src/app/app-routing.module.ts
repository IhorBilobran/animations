import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardsPhysicsComponent } from './cards-physics/cards-physics.component';

const routes: Routes = [
  { path: '', redirectTo: 'cards-physics', pathMatch: 'full' },
  { path: 'cards-physics', component: CardsPhysicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
