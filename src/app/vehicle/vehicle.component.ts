import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { VehicleService } from '../services/vehicle.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private service: VehicleService, private modalService: NgbModal) { }

  // FIlter and sorting variables to be passed to component
  sortValue = 'make';
  orderValue = '';
  yearSliderValue = 0;
  mileageSliderValue = 0;
  priceSliderValue = 0;
  value: number = 10;
  highValue: number = 90;
  options: Options = {
    floor: 2000,
    ceil: 2020,
    step: 1,
    showTicks: true
  };

  // Vehicle detail variables to be passed to component
  vehicle:any;
  modalTitle:string;
  vehicleModel:string;
  vehicleColour:string;
  vehicleYear:string;
  vehicleSellingPrice:string;
  vehicleMileage:string;
  vehicleDescription:string;
  vehicleImage:string;
  closeResult = '';



  // List of all vehicles that will hold result of get reqest to API
  VehicleList: any=[];


  ngOnInit(): void {
    this.refreshVehicleList();
  }

  // modal method that will take in a vehicle object to view its details
  viewVehicle(item){
      this.vehicle = item;
      this.modalTitle= item.make + ' ' + item.series;
      this.vehicleModel= item.make;
      this.vehicleColour= item.colour;
      this.vehicleYear = item.year;
      this.vehicleSellingPrice = item.selling_price;
      this.vehicleMileage = item.mileage;
      this.vehicleDescription = item.description;
      this.vehicleImage = item.url3;
  }


  reset(){
    this.orderValue = undefined;
  }

  refreshVehicleList(){
    this.service.getVehicleList().subscribe(data=>{
      this.VehicleList = data;
    })
  }

  // open and close methods for ng bootstraop modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // ^^ ^^ ^^ same description as above ^^ ^^ ^^
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
