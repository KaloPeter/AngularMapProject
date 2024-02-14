import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { OmapComponent } from './Components/omap/omap.component';

import { FormsModule } from '@angular/forms';
import { ListAddressesComponent } from './Components/list-addresses/list-addresses.component';
import { LongLatToAddrComponent } from './Components/long-lat-to-addr/long-lat-to-addr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OmapComponent,
    ListAddressesComponent,
    LongLatToAddrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
