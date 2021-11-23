import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() SocialMediaId :number|undefined ;
  @Input() FaceBook :string|undefined ;
  @Input() Instagram :string|undefined ;
  @Input() Email :string|undefined ;
  @Input() PhoneNumber :number|undefined ;
  @Input() other :string|undefined ;

  constructor(public Admin:AdminService,private toast:ToastrService, private router:Router) { }
   
  GetAllSocialMedia(){
    this.Admin.GetAllSocialMedia().subscribe((res:any)=>{
      this.Admin.GetAllSocialMediaData=res;
      
    },
   
  
  );




  }
  

   ngOnInit(): void {
    this.GetAllSocialMedia();

  }



  gotoHome(){
this.router.navigate(['home'])

  }



  gotoAbout(){
    this.router.navigate(['about'])
  }

  gotoLogin(){
    this.router.navigate(['auth'])
  }

  gotoContact(){


    this.router.navigate(['contact'])
  }
}