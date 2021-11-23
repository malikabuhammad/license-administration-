import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';
import { ClientService } from './client.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, private toast: ToastrService, private router: Router) { }

  createCustomerData: any = [{}];
  numberOfActiveUser = new BehaviorSubject(0);

  Registration(createCustomerData: any) {

    return this.http.post('https://localhost:44355/api/User/CreateUser/', createCustomerData).subscribe((createCustomerData) => { });
  }

  email = new FormControl('', []);
  password = new FormControl('');

  currentUser: any;
  submit() {
    var responce1: any;
    var body = {
      email: this.email.value.toString(),
      password: this.password.value.toString()
    };

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    }
    // debugger
    this.http.post('https://localhost:44355/api/jwt/Authentication', body, requestOptions).subscribe((res: any) => {
      localStorage.setItem('token', res);
      let data: any = jwtDecode(res);
      localStorage.setItem('user', JSON.stringify({ ...data }));
      this.updateCurrentUserID();

      if (data.role == '1') {
        this.router.navigate(['Admin']);
        this.toast.success("Login Successfully")
      } else if (data.role == '3') {
        this.router.navigate(['/profile']);
        this.toast.success("Login Successfully")
      } else if (data.role == '2') {
        this.router.navigate(['accountant']);
        this.toast.success("Login Successfully")
      }
     

      
    },
    (error)=>this.toast.error("Email or Password is Incorrect")
    )
   
  }

  updateCurrentUserID() {
    let data = localStorage.getItem('user');
    if (data) {
      var user = JSON.parse(data);
      this.currentUser = user.UserId;
    } else {
      this.currentUser = null;
    }
  }
  
  logout() {
    this.updateCurrentUserID();
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
