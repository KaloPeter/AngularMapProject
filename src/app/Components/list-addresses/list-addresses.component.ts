import { Component } from '@angular/core';

declare const L: any;

@Component({
  selector: 'app-list-addresses',
  templateUrl: './list-addresses.component.html',
  styleUrls: ['./list-addresses.component.css']
})
export class ListAddressesComponent {


  model: any = {};

  markers2: Marker[] = [];

  map2: any;
  layerGroup: any;

  timeout: any = null;
  theMarker: any = {};
  ngOnInit(): void {
    this.map2 = L.map('map2').setView([51.505, -0.09], 13);
    this.layerGroup = L.layerGroup().addTo(this.map2);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map2);


    //function (e:any) {} --->  (e:any)=>{}
    this.map2.on('click', (e: any) => {
      var lat = e.latlng.lat;
      var lon = e.latlng.lng;

      if (this.theMarker != undefined) {
        this.map2.removeLayer(this.theMarker);
      };

      //Add a marker to show where you clicked.
      this.theMarker = L.marker([lat, lon]).addTo(this.layerGroup);

      console.log(lat + "_" + lon);


    });



  }


  async addr_search(addr: any) {

    //Waiter if user stopped typing, then after one sec we execute implemented code in body--->Pressing Search/Find button is not needed==More dynamic, typing and searching
    //Problem---> Cant reference marker immidiately with this, needs--Might cause problem later--too many requests, error during response etc......
    clearTimeout(this.timeout);
    var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + addr.value;
    var markers: Marker[] = [];
    this.timeout = setTimeout(async function () {
      const response = await fetch(url);
      const arr = await response.json();

      if (arr.length > 0) {
        var i;
        for (i = 0; i < arr.length; i++) {
          //arr[i]-> given address by user might not be specific, so every option has to be displayed
          var m: Marker = { lat: arr[i].lat, lon: arr[i].lon, name: arr[i].display_name };
          markers.push(m);
        }
      }
    }, 1000)
    this.markers2 = markers;
  }


  setLonlat(m: Marker) {

    this.model.lat = m.lat;
    this.model.lon = m.lon;

    this.layerGroup.clearLayers();
    this.map2.setView([m.lat, m.lon], 13);
    // L.marker([m.lat, m.lon]).addTo(this.map2);

    this.theMarker = L.marker([m.lat, m.lon]).addTo(this.layerGroup);

    console.log(m.lat + "_" + m.lon);


    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map2);

  }
}


export interface Marker {
  lat: number,
  lon: number,
  name: string
}
