import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Item } from '../models/Item';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(public firestore: AngularFirestore) {
    this.items = this.firestore.collection('items', ref => ref.orderBy('name')).valueChanges();
  }

  getItems() {
    return this.items;
  }
}

