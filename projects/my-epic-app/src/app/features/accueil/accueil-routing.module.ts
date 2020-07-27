import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BibliothequeComponent} from '../bibliotheque/bibliotheque.component';
import {AccueilComponent} from './accueil.component';


const routes: Routes = [{ path: '', component: AccueilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
