import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheraizationGuard } from '../autheraization.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreatVehicleComponent } from './creat-vehicle/creat-vehicle.component';
import { CreateDrivinglicenseComponent } from './create-drivinglicense/create-drivinglicense.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DisplayCreditCardComponent } from './display-credit-card/display-credit-card.component';
import { DisplayVehicleComponent } from './display-vehicle/display-vehicle.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateDrivinglicenseComponent } from './update-drivinglicense/update-drivinglicense.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { UpdatecreditcardComponent } from './updatecreditcard/updatecreditcard.component';

const routes: Routes = [

{
  path:'home',
  component:HomeComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'createvehicle',
  component:CreatVehicleComponent
},
{
  path:'creatdrivingLicense',
  component:CreateDrivinglicenseComponent
},
{
  path:'updatedrivingLicense/:id',
  component:UpdateDrivinglicenseComponent
},
{
  path:'updatevehicle/:id',
  component:UpdateVehicleComponent
}
,
{
  path:'creditcards',
  component:CreditCardComponent
},
{
  path:'display',
  component:DisplayVehicleComponent
},
{
  path:'updateCredit/:id',
  component:UpdatecreditcardComponent
},
{

  path:'profile',
  component:ProfileComponent

},
{
  path:'',
  component:LandingpageComponent
},
{
  path:'EditProfile',
  component:EditProfileComponent
},
{
  path:'displayCreditCard',
  component:DisplayCreditCardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
