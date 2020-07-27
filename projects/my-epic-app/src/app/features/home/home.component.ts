import {Component, NgZone, OnInit} from '@angular/core';
import * as Muuri from 'muuri';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'my-org-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users = [];
  // tslint:disable-next-line:no-any
  grid1: any;
  // tslint:disable-next-line:no-any
  grid2: any;

  constructor(private http: HttpClient, private zone: NgZone) { }

  ngOnInit(): void {
    this.http.get<any>('https://randomuser.me/api/?results=5').subscribe((data) => {
      this.users = data.results;

      this.zone.runOutsideAngular(() => setTimeout(() => {
        this.grid1 = new Muuri.default('.grid1', {
          dragEnabled: true,
          dragSortPredicate: {
            threshold: 20,
            action: 'move'
          }
        });
        this.grid2 = new Muuri.default('.grid2', {
          dragEnabled: true,
          dragSortPredicate: {
            threshold: 20,
            action: 'move'
          }
        });
      }, 100));
    });
  }

}
