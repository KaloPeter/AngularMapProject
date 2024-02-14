import { Component, OnInit } from '@angular/core';
declare const L: any;

@Component({
  selector: 'app-omap',
  templateUrl: './omap.component.html',
  styleUrls: ['./omap.component.css']
})
export class OmapComponent implements OnInit {



  ngOnInit(): void {

    var map = L.map('map').setView([47.3228447, 18.7836927], 10);
    //L.marker([47.3228447, 18.7836927]).addTo(map)

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);


    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.Control.geocoder().addTo(map);

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


  }



}
