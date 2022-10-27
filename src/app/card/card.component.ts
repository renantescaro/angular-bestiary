import { Component, OnInit, Input } from '@angular/core';
import { Beast } from '../beast.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() beast!: Beast;

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
