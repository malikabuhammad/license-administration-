import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PriceComponent } from './home/price/price.component';
import { CreatVehicleComponent } from './creat-vehicle/creat-vehicle.component';
import { CreateDrivinglicenseComponent } from './create-drivinglicense/create-drivinglicense.component';
import { UpdateDrivinglicenseComponent } from './update-drivinglicense/update-drivinglicense.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { ProfileComponent } from './profile/profile.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DisplayVehicleComponent } from './display-vehicle/display-vehicle.component';
import { UpdatecreditcardComponent } from './updatecreditcard/updatecreditcard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DisplayCreditCardComponent } from './display-credit-card/display-credit-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PriceComponent,
    CreatVehicleComponent,
    CreateDrivinglicenseComponent,
    UpdateDrivinglicenseComponent,
    UpdateVehicleComponent,
    ProfileComponent,
    CreditCardComponent,
    DisplayVehicleComponent,
    UpdatecreditcardComponent,
    LandingpageComponent,
    EditProfileComponent,
    DisplayCreditCardComponent
    ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
