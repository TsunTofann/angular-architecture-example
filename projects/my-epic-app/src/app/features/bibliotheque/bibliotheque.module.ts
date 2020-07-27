import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from '../home/home-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BibliothequeComponent } from './bibliotheque.component';
import {BibliothequeRoutingModule} from './bibliotheque-routing.module';
import { CardComponent } from './card/card.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [BibliothequeComponent, CardComponent],
  imports: [
    CommonModule,
    BibliothequeRoutingModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class BibliothequeModule { }
