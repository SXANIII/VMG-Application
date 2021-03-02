import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private service: VehicleService) { }

  VehicleList: any=[];

  ngOnInit(): void {
    this.refreshVehicleList();
  }

  refreshVehicleList(){
    this.service.getVehicleList().subscribe(data=>{
      this.VehicleList = data;
    })
  }

}
