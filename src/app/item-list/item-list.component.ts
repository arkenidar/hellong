import { Component, OnInit } from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [new Item('a', 'b'), new Item('c', 'd')];
  constructor() { }
  ngOnInit() {
  }
  add(){
    this.items.push(new Item('', ''));
  }
  remove(){
    this.items.splice(0, 1);
  }
}
