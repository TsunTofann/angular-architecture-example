import { Component, OnInit } from '@angular/core';

class Card {
  title: string;
  category: string;
  format: string;
  date: Date;

  constructor(title: string){
    this.title = title;
    this.category = '';
    this.date = new Date();
    this.format = '';
  }
}

@Component({
  selector: 'my-org-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.scss']
})
export class BibliothequeComponent implements OnInit {
  cards: Card[] = [];
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
    this.cards.push(new Card('test'));
    this.cards.push(new Card('test2'));
    this.cards.push(new Card('test3'));
    this.cards.push(new Card('test4'));
    this.cards.push(new Card('test5'));
  }

}
