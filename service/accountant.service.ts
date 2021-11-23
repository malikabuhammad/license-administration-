import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iimap } from './iimap';
import { Isum } from './Isum';
import { Iuser } from './iuser';
import { Ivehicle } from './ivehicle';

@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  constructor(public http :HttpClient , private toast:ToastrService) {}
  GetCountOfMessagesData:any=[{}];
  GetAllEmployeeData :any = [{}]; 
  GetAllDrivingLicenceData :any = [{}];
  GetAllVehicleData :any = [{}];
  GetAllUserData :any = [{}];
  GetAvgOfSalaryData :any =[{}];
  GetSumOfSalaryData :any =[{}];
  GetMinOfSalaryData :any =[{}];
  GetAllCreditCardData :any=[{}];
  GetNumberOfEmployeeData :any=[{}];
  GetMaxSallaryData :any=[{}];
  GetCCPriceData :any =[{}];
  GetContactUsData :any =[{}];
  createData :any =[{}];
  creatSocialMediaData=[{}];
  NumberOfVehicleLicenceBetweenReportData :any=[{}];
  GetNumberOfUnLicenseVehicleReportData :any=[{}];
  UpdatedEmployeeData=[{}];
  createCridetCardData:any=[{}];
  createContactsData:any=[{}];
  UpdateAboutUsData=[{}];
  UpdateSocialMediaData=[{}];
  UpdateFooterData=[{}];
  GetAllAboutUSData: any =[{}];
  GetAllFooterData: any =[{}];
  GetAllSocialMediaData:any=[{}];
  UserByIdData :any=[{}];


  numberOfActiveEmployee = new BehaviorSubject(0);

  postId :any ;
  
  // url ="http://localhost:4200/Admin/updateEmployee"
  // url="https://localhost:4200/Admin/updateEmployee"


  // GetAllEmployee()
  // {
  //  return this.http.get('https://localhost:44355/api/User/AllOfEmployee');
  // }

  GetAllDrivingLicence()
  {
    return this.http.get('https://localhost:44355/api/DrivingLicence/GetAllDrivingLicence');
  }
  GetAllVehicle()
  {
    return this.http.get('https://localhost:44355/api/vehicle/GetAllVehicle');
  }

  GetAllUser()
  {
    return this.http.get('https://localhost:44355/api/User/GetAllUser');
  }


  GetAvgOfSalary()
  {
    return this.http.get('https://localhost:44355/api/User/GetAvgOfSalary');

  }
 
 DeleteUser(id: number)
  {
  
  this.http.delete('https://localhost:44355/api/User/DeleteUser/'+ id).subscribe((data) =>
  {
  }
    );
 }



 GetMinOfSalary(){
  return this.http.get('https://localhost:44355/api/User/GetMinOfSalary');
}

GetSumOFSalary(){
  return this.http.get('https://localhost:44355/api/User/GetSumOfSalary');
}



GetAllCreditCard()
  {
    return this.http.get('https://localhost:44355/api/CreditCard/GetAllCreditCard');
  }


  deleteVehicle(id: number)
   {
  
   this.http.delete('https://localhost:44355/api/Vehicle/DeleteVehicle/' + id).subscribe((data) => { });
 
  }


 


  GetNumberOfEmployee(){
    return this.http.get('https://localhost:44355/api/User/NumberOfEmployee');
  }


  GetMaxSallary(){

    return this.http.get('https://localhost:44355/api/User/GetMaxOfSalary');
  }

  GetCCPrice(){
    return this.http.get('https://localhost:44355/api/CCPrice/GetCCPrice');
  }
  
  UpdateCCPrice(UpdatedCCPriceData:any){
    return this.http.put('https://localhost:44355/api/CCPrice/UpdateCCPrice/',UpdatedCCPriceData).subscribe((UpdatedCCPriceData) => { });
  }

 GetContactUs()
 {
  return this.http.get('https://localhost:44355/api/Contact/GetAllContactUs');

 }

GetNumberOfUnLicenseVehicleReport(){

  return this.http.get('https://localhost:44355/api/Vehicle/NumberOfUnLicenceVehicleReport');
}

 NumberOfVehicleDailyLicenceReport(TodayDate :any):Observable<Iimap[]>
{

return this.http.post<Iimap[]>('https://localhost:44355/api/Vehicle/NumberOfVehicleDailyLicenceReport/', {"TodayDate":TodayDate} )

}

NumberOfVehicleLicenceReportBetween(DateFrom :any , DateTo :any):Observable<Iimap[]>
{

return this.http.post<Iimap[]>('https://localhost:44355/api/Vehicle/NumberOfVehicleLicenceBetweenReport/', {"DateFrom":DateFrom , "DateTo":DateTo} )

}

  data :any =[{}];

  GetUserById(id :number){
  return this.http.get<Iuser>(`${environment.apiLink}User/GetUserById/${id}`);
  }
  

  VehicleDailyLicenceReport(TodayDate :any):Observable<Ivehicle[]>
  {
  
  return this.http.post<Ivehicle[]>('https://localhost:44355/api/Vehicle/VehicleDailyLicenceReport/', {"TodayDate":TodayDate} )
  }
  VehicleDailyUnLicenceReport(Date :any):Observable<Ivehicle[]>
  {
  
  return this.http.post<Ivehicle[]>('https://localhost:44355/api/Vehicle/UnLicenceVehicleReport/', {"Date":Date} )
  
  }
  VehicleYearlyLicenceReport(DateFrom :any,DateTo :any):Observable<Ivehicle[]>
  {
  
  return this.http.post<Ivehicle[]>('https://localhost:44355/api/Vehicle/VehicleYearlyLicenceReport/', {"DateFrom":DateFrom ,"DateTo":DateTo} )
  
  }

  VehicleMonthlyLicenceReport(DateFrom :any,DateTo :any):Observable<Ivehicle[]>
  {
  
  return this.http.post<Ivehicle[]>('https://localhost:44355/api/Vehicle/VehicleMonthlyLicenceReport/', {"DateFrom":DateFrom ,"DateTo":DateTo} )
  
  }

  VehicleLicenceBetweenReport(DateFrom :any,DateTo :any):Observable<Ivehicle[]>
  {
  
  return this.http.post<Ivehicle[]>('https://localhost:44355/api/Vehicle/VehicleMonthlyLicenceReport/', {"DateFrom":DateFrom ,"DateTo":DateTo} )
  
  }

  GetCountOfMessages(){
    return this.http.get('https://localhost:44355/api/Contact/GetCountOfMessages');
  }
  GetAllEmployee()
  {
   return this.http.get('https://localhost:44355/api/User/AllOfEmployee');
  }


  NumberOfVehicleDailyLicenceProfitReport(TodayDate :any):Observable<Isum[]>
  {
  
  return this.http.post<Isum[]>('https://localhost:44355/api/Vehicle/VehicleDailyLicenceProfitReport/', {"TodayDate":TodayDate} )
  
  }



  vehicleBetweenLicenceProfitReport(DateFrom :any , DateTo :any):Observable<Isum[]>
  {
  
  return this.http.post<Isum[]>('https://localhost:44355/api/Vehicle/vehicleBetweenLicenceProfitReport/', {"DateFrom":DateFrom , "DateTo":DateTo} )
  
  }


  VehicleMonthlyLicenceProfitReport(DateFrom :any , DateTo :any):Observable<Isum[]>
{

return this.http.post<Isum[]>('https://localhost:44355/api/Vehicle/VehicleMonthlyLicenceProfitReport/', {"DateFrom":DateFrom , "DateTo":DateTo} )

}
  

}