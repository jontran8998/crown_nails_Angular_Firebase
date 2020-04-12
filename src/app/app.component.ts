import { Component, OnInit } from '@angular/core';

declare const greenDate: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const title = 'Crown Nails and Spa';
    greenDate();
  }
}
