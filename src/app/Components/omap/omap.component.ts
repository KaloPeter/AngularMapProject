import { Component, OnInit } from '@angular/core';
declare const L: any;

@Component({
  selector: 'app-omap',
  templateUrl: './omap.component.html',
  styleUrls: ['./omap.component.css']
})
export class OmapComponent implements OnInit {


  layerGroup: any;

  ngOnInit(): void {

    var map = L.map('map').setView([47.3228447, 18.7836927], 10);
    this.layerGroup = L.layerGroup().addTo(map);

    //L.marker([47.3228447, 18.7836927]).addTo(map)

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);


    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.Control.geocoder().addTo(map);//searchbar



    //OK
    // var geocoder = L.Control.geocoder({
    //   defaultMarkGeocode: false
    // })
    //   .on('markgeocode', function (e: any) {
    //     var bbox = e.geocode.bbox;
    //     var poly = L.polygon([
    //       bbox.getSouthEast(),
    //       bbox.getNorthEast(),
    //       bbox.getNorthWest(),
    //       bbox.getSouthWest()
    //     ]).addTo(map);
    //     map.fitBounds(poly.getBounds());
    //   })
    //   .addTo(map);

    //var marker = L.marker([51.509865, -0.118092]).addTo(map); add merker to given lat/long


    //OK
    // var theMarker = {};

    // map.on('click', function (e: any) {
    //   var lat = e.latlng.lat;
    //   var lon = e.latlng.lng;

    //   console.log("You clicked the map at LAT: " + lat + " and LONG: " + lon);
    //   //Clear existing marker, 

    //   if (theMarker != undefined) {
    //     map.removeLayer(theMarker);
    //   };

    //   //Add a marker to show where you clicked.
    //   theMarker = L.marker([lat, lon]).addTo(map);
    // });

    //this.addCustomMarkers();//random pointers by lat and lon

  }

  async addCustomMarkers() {

    var ms: Marker[] = [];

    var lat1 = 47.010101;
    var lon1 = 38.516325;

    var lat2 = 56.0132596;
    var lon2 = 38.516325;

    var lat3 = 47.010101;
    var lon3 = -1.516325;

    var m1: Marker = { name: 'FirstRadnom', lat: lat1, lon: lon1 };
    var m2: Marker = { name: 'SecondRandom', lat: lat2, lon: lon2 };
    var m3: Marker = { name: 'ThirdRandom', lat: lat3, lon: lon3 };
    ms.push(m1);
    ms.push(m2);
    ms.push(m3);

    ms.forEach(m => {
      L.marker([m.lat, m.lon]).bindPopup(m.name).addTo(this.layerGroup);
    });

    //markers by addresses----NOT USED, resp address depends on place--different name attributes
    //const markerText = L.popup().setContent(m.name);
    // var address1 = "Fejér Martonvásár Hunyadi út 22";
    // var address2 = "Fejér Székesfehérvár Késmárki köz 5";
    // var address3 = "Pest Budaörs Szabadság út 70";
    // var address4 = "Budapest III. kerület";

    // var urls: string[] = [];
    // urls.push("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + address1);
    // urls.push("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + address2);
    // urls.push("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + address3);
    // urls.push("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + address4);


    // urls.forEach(async url => {
    //   const response = await fetch(url);

    //   const address = await response.json();
    //   //address[0]--> because if given address is unique, so there cannot be more, therefore it can be found at the begining of array under index of 0
    //   var m: Marker = { lat: address[0].lat, lon: address[0].lon, name: address[0].display_name };

    //   const markerText = L.popup().setContent(m.name);
    //   L.marker([m.lat, m.lon]).bindPopup(markerText).addTo(this.layerGroup);

    // });
  }

}
export interface Marker {
  lat: number,
  lon: number,
  name: string
}
