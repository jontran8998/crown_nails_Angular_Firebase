import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  map: mapboxgl.Map;
  constructor() { }

  ngOnInit() {
    (mapboxgl as any).accessToken = environment.mapboxKey;

    this.map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-97.14984909524182, 49.83349643562383],
      zoom: 12,
      logoPosition: 'top-left'
      });

    this.crearMarcardor(-97.14984909524182, 49.83349643562383);
  }

  crearMarcardor(lng: number, lat: number) {
    const marker = new mapboxgl.Marker({
      draggable: true,
    }).setLngLat([lng, lat]).addTo(this.map);

    // marker.on('drag', () => {
    //   console.log(marker.getLngLat());

    // });
  }

}
