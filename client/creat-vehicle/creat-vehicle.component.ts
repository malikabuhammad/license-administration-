import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-creat-vehicle',
  templateUrl: './creat-vehicle.component.html',
  styleUrls: ['./creat-vehicle.component.css']
})
export class CreatVehicleComponent implements OnInit {
  VehicleTypes=['Motorcycle','Construction Vehicle','Private Passenger','Commerical Passenger','Minibus ','Bus','Disabled Vehicle'];
  VehicleStatus=['License','UnLicense'];
  CCPrices=['1000-1500','1500-2000','2000-2500','2500-3000','3000-4000' ]

 
 
  constructor(public client :ClientService , private toast :ToastrService,public auth :AuthService) { }
  currentUser=this.auth.currentUser;
  formGroup =new FormGroup({
    vehicleNumber:new FormControl(''),
    vehicleTypeId :new FormControl('',Validators.required),
    vehiclePayload:new FormControl('',Validators.required),
    numberOfPassengers:new FormControl('',Validators.required),
    structureNo:new FormControl('',Validators.required),
    engineNumber:new FormControl('',Validators.required),
    dateOfLicense:new FormControl('',Validators.required),
    userId :new FormControl('',Validators.required),
    vehicleColor:new FormControl('',Validators.required),
    vihecleImage:new FormControl('',Validators.required),
    viheclePDF:new FormControl('',Validators.required),
    vihecleStatus:new FormControl('',Validators.required),
    technicalInspection:new FormControl('',Validators.required),
    ccId:new FormControl('',Validators.required),
  })

  vehicleNumber1:any;
  vehiclePayload1:any;
  numberOfPassengers1:any;
  vehicleTypeId1 :any;
  structureNo1:any;
  engineNumber1:any;
  dateOfLicense1:any;
  // userId1:any;
  vehicleColor1:any;
  vihecleImage1:any;
  viheclePDF1:any;
  vihecleStatus1:any;
  ccId1:any;
  technicalInspection1:any;
  
  saveItem(){
    debugger     
    this.vehicleNumber1=this.formGroup.value.vehicleNumber;
    this.vehiclePayload1=this.formGroup.value.vehiclePayload;
    this.numberOfPassengers1=this.formGroup.value.numberOfPassengers;
    this.vehicleTypeId1=this.formGroup.value.vehicleTypeId;
    this.structureNo1=this.formGroup.value.structureNo;
    this.engineNumber1=this.formGroup.value.engineNumber;
    this.dateOfLicense1=this.formGroup.value.dateOfLicense;
    // this.userId1=this.formGroup.value.userId;
    this.vehicleColor1=this.formGroup.value.vehicleColor;
    this.vihecleImage1=this.formGroup.value.vihecleImage;
    this.viheclePDF1="pdf";
    this.vihecleStatus1=this.formGroup.value.vihecleStatus;
    this.ccId1=this.formGroup.value.ccId;
    this.technicalInspection1=this.formGroup.value.technicalInspection;


        ///Vehicle Type Drop Down List
    if(this.vehicleTypeId1=="Motorcycle")
    {
      this.vehicleTypeId1=1
    }else if(this.vehicleTypeId1=="Construction Vehicle")
    {
      this.vehicleTypeId1=2
    }else if(this.vehicleTypeId1=="Private Passenger")
    {
      this.vehicleTypeId1=3
    }else if(this.vehicleTypeId1=="Commerical Passenger")
    {
      this.vehicleTypeId1=4
    }else if(this.vehicleTypeId1=="Minibus")
    {
      this.vehicleTypeId1=5
    }else if(this.vehicleTypeId1=="Bus")
    {
      this.vehicleTypeId1=6
    }else if(this.vehicleTypeId1=="Disabled Vehicle")
    {
      this.vehicleTypeId1=7
    }

   

    ///Vehicle Status Drop Down List
    if(this.vihecleStatus1=="License")
    {
      this.vihecleStatus1="true";
    }else 
    {
      this.vihecleStatus1="false";
    }

    ///CCPrice Drop Down List
    if(this.ccId1=="1000-1500")
    {
      this.ccId1=1;
    }else  if(this.ccId1=="1500-2000")
    {
      this.ccId1=2;
    }else  if(this.ccId1=="2000-2500")
    {
      this.ccId1=3;
    }else  if(this.ccId1=="2500-3000")
    {
      this.ccId1=5;
    }else  if(this.ccId1=="3000-4000")
    {
      this.ccId1=6;
    }



   const data1=
    {
      vehicleNumber:parseInt(this.vehicleNumber1),
      vehiclePayload:parseInt(this.vehiclePayload1),
      numberOfPassengers:parseInt(this.numberOfPassengers1),
      vehicleTypeId:parseInt(this.vehicleTypeId1),
      structureNo:parseInt(this.structureNo1),
      engineNumber:parseInt(this.engineNumber1),
      dateOfLicense:this.dateOfLicense1.toString(),
      userId:parseInt(this.currentUser),
      vehicleColor:String(this.vehicleColor1),
      vihecleImage:String(this.vihecleImage1),
      viheclePDF:String(this.viheclePDF1),
      vihecleStatus:(this.vihecleStatus1=="true"),
      ccId:parseInt(this.ccId1),
      technicalInspection:parseInt(this.technicalInspection1)
  }

    this.client.CreateVehicle(data1);
     window.location.reload();

  }
  ngOnInit(): void {
    console.log(this.currentUser)
  }

}
  

