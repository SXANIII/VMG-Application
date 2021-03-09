import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {FilterPipe} from './Pipes/filter.pipe';
import {SortPipe} from './Pipes/sort.pipe';
import {MatSelectModule} from '@angular/material/select';
import {NgPipesModule} from 'ngx-pipes';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms'
import {MatSliderModule} from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FilterPricePipe } from './Pipes/filter-price.pipe';
import { FilterMileagePipe } from './Pipes/filter-mileage.pipe';



@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    FilterPipe,
    SortPipe,
    FilterPricePipe,
    FilterMileagePipe
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    NgPipesModule,
    MatRadioModule,
    MatButtonToggleModule,
    FormsModule,
    MatSliderModule,
    NgbModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
