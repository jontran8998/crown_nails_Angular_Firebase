import { Component, OnInit } from '@angular/core';
import { ItemsService} from '../service/items.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  items: Item[];

 constructor(private itemService: ItemsService) {
 }
 ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
 }
}
