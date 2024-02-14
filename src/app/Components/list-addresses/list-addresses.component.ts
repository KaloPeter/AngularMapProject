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




  ngOnInit(): void {
    this.map2 = L.map('map2').setView([51.505, -0.09], 13);
    this.layerGroup = L.layerGroup().addTo(this.map2);


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map2);


  }


  addr_search(addr: any) {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + addr.value;
    var markers: Marker[] = [];

    clearTimeout(this.timeout);
    this.timeout = setTimeout(function () {
      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          var arr = myArr;
          var out = "";
          var i;

          if (arr.length > 0) {
            for (i = 0; i < arr.length; i++) {
              var m: Marker = { lat: arr[i].lat, lon: arr[i].lon, name: arr[i].display_name };
              markers.push(m)
              console.log(out);

              out += arr[i].lat + ", " + arr[i].lon + "___" + arr[i].display_name;

            }
            //console.log(markers);

          }
          // else {
          //   //document.getElementById('results').innerHTML = "Sorry, no results...";
          //   //console.log("NO RESULT");
          //   //alert("NO RESULT")
          // }
        }
      };

    }, 1000);//if input stops for 700 millisec, we start searching--> not sending request when keyUp




    this.markers2 = markers;

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

  }

  setLonlat(m: Marker) {

    this.model.lat = m.lat;
    this.model.lon = m.lon;

    this.layerGroup.clearLayers();
    this.map2.setView([m.lat, m.lon], 13);
    // L.marker([m.lat, m.lon]).addTo(this.map2);

    L.marker([m.lat, m.lon]).addTo(this.layerGroup);

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
