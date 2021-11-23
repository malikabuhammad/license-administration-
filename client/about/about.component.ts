import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() userId : number | undefined;
  @Input() name : string | undefined;
  @Input() roleId : number | undefined;
  @Input() image : string | undefined;
  


  constructor(public Admin:AdminService) { }
  GetAllEmployee()
  {
    this.Admin.GetAllEmployee().subscribe((res:any)=>{
      this.Admin.GetAllEmployeeData=res;
    })
  }
  ngOnInit(): void {
    this.GetAllEmployee();
  }

}