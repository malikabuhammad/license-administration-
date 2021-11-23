import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin.service';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() Message : string | undefined;
  @Input() Email : string | undefined;
  constructor(public User :ClientService,private toast:ToastrService,public Admin :AdminService) { }
  
  formGroup =new FormGroup({
    Message:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required),
   
    
  })

  Message1 : any;
  Email1 : any;
  
 
  
  saveItem(){
        
    this.Message1=this.formGroup.value.Message;
    this.Email1=this.formGroup.value.Email;
   
    

    const data2=
    {
      Message:this.Message1.toString(),  
      Email: this.Email1.toString(),
    

  }
    this.User.createContacts(data2);
    this.toast.success('your message sent successfuly');
    window.location.reload();
}

GetAllSocialMedia(){
  this.Admin.GetAllSocialMedia().subscribe((res:any)=>{
    this.Admin.GetAllSocialMediaData=res;
    
  },
 

);




}

  ngOnInit(): void {

    this.GetAllSocialMedia();


  }

}
