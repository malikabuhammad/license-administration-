import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { IcreditCard } from './IcreditCard';
import { IdrivingLicense } from './IdrivingLicense';
import { Iuser } from './iuser';
import { Ivehicle } from './ivehicle';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public http: HttpClient, private toast: ToastrService, public auth: AuthService) { }

  createContactsData: any = [{}];
  createVDate: any = [{}];
  createCridetCardData: any = [{}];
  GetUserVehicleData: any = [{}];
  GetUserCreditData: any = [{}];
  UpdateCreditCardData = [{}];
  GetImagesliderData:any=[{}];

  createContacts(createContactsData: any) {

    return this.http.post('https://localhost:44355/api/Contact/CreateContactUs/', createContactsData).subscribe((createContactsData) => { });
  }

  createDrivingLicence(createDrivingLicenceData: any) {

    return this.http.post('https://localhost:44355/api/DrivingLicence/CreateDrivingLicence/', createDrivingLicenceData).subscribe((createDrivingLicenceData) => { });
  }

  UpdatedDrivingLicense(UpdatedDrivingLicenseData: any) {
    return this.http.put('https://localhost:44355/api/DrivingLicence/UpdateDrivingLicence/', UpdatedDrivingLicenseData).subscribe((UpdatedDrivingLicenseData) => { });
  }

  UpdatedVehicle(UpdatedVehicleData: any) {
    return this.http.put('https://localhost:44355/api/Vehicle/UpdateVehicle/', UpdatedVehicleData).subscribe((UpdatedVehicleData) => { });
  }

  CreateVehicle(createVDate: any) {
    return this.http.post('https://localhost:44355/api/Vehicle/AddVehicle/', createVDate).subscribe((createVDate) => { });
  }
  GetUserinfo(id: number) {
    return this.http.get('https://localhost:44355/api/User/GetUserById/' + id)
  }
  createCridetCard(createCridetCardData: any) {

    return this.http.post('https://localhost:44355/api/CreditCard/AddCreditCard/', createCridetCardData).subscribe((createCridetCardData) => { });
  }
  GetuserVehicle() {
    return this.http.get('https://localhost:44355/api/Vehicle/GetAllVehicle/')
  }
  deleteVehicle(id: number) {

    this.http.delete('https://localhost:44355/api/Vehicle/DeleteVehicle/' + id).subscribe((data) => { });

  }
  GetAllCreditCard() {
    return this.http.get('https://localhost:44355/api/CreditCard/GetAllCreditCard');
  }
  UpdateCreditCard(UpdateCreditCardData: any) {
    return this.http.put('https://localhost:44355/api/CreditCard/UpdateCreditCard/', UpdateCreditCardData).subscribe((UpdateCreditCardData) => { });
  }

  GetUserById() {
    return this.http.get<Iuser>(`${environment.apiLink}User/GetUserById/${this.auth.currentUser}`);
  }
  GetVehicleById() {
    return this.http.get<Ivehicle>(`${environment.apiLink}Vehicle/GetVehicleById/${this.auth.currentUser}`);
  }
  GetDrivingById() {
    return this.http.get<IdrivingLicense>(`${environment.apiLink}DrivingLicence/GetDrivinglicenseById/${this.auth.currentUser}`);
  }
  GetCreditCardById() {
    return this.http.get<IcreditCard>(`${environment.apiLink}CreditCard/GetCreidtcardById/${this.auth.currentUser}`);
  }
  UpdateVehicle(UpdateVehicleData: any) {
    
    return this.http.put('https://localhost:44355/api/Vehicle/UpdateVehicle/', UpdateVehicleData).subscribe((UpdateVehicleData) => { });
  }
  deleteCreditCard(id: number) {

    this.http.delete('https://localhost:44355/api/CreditCard/DeleteCreditCard/' + id).subscribe((data) => { });

  }
  GetAllImageslider() {
    return this.http.get('https://localhost:44355/api/ImageSlider/GetALLImageSlider');
  }
}