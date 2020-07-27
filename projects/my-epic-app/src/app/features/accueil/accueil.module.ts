import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil.component';
import {BibliothequeRoutingModule} from '../bibliotheque/bibliotheque-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {AccueilRoutingModule} from './accueil-routing.module';



@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class AccueilModule { }
