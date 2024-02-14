import { Component, OnInit } from '@angular/core';
declare const L: any;

@Component({
  selector: 'app-long-lat-to-addr',
  templateUrl: './long-lat-to-addr.component.html',
  styleUrls: ['./long-lat-to-addr.component.css']
})
export class LongLatToAddrComponent implements OnInit {

  ngOnInit(): void {

    var data = [47.3228447, 18.7836927];

    var map = L.map('map3', { zooomcontrol: false }).setView(data, 10);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    L.Control.geocoder().addTo(map);//searchbar

    var theMarker = {};

    map.on('click', async function (e: any) {
      var lat = e.latlng.lat;
      var lon = e.latlng.lng;

      // console.log("LAT: " + lat + " LONG: " + lon);
      //Clear existing marker, 

      if (theMarker != undefined) {
        map.removeLayer(theMarker);
      };

      //Add a marker to show where you clicked.
      theMarker = L.marker([lat, lon]).addTo(map);

      var url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat + "&lon=" + lon + "";
      const response = await fetch(url);
      const arr = await response.json();
      console.log(arr.address);
    });

  }


}
