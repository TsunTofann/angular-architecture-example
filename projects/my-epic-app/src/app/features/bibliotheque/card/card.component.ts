import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-org-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title = 'no-title';
  @Input() date = new Date();
  @Input() category = 'no-category';
  @Input() state = 'no-state';

  constructor() { }

  ngOnInit(): void {
  }

}
