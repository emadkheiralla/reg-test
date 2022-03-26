import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [HttpClient]
})
export class RegisterComponent implements OnInit {
  @Input()
  error!: string | null;
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    bio: new FormControl('', Validators.required)
  });
  url = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';
  submitted = false;

  constructor(private http: HttpClient, private router: Router, private user: UserService) {}

  ngOnInit(): void {
    
  }

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.http.get(this.url).subscribe((data: any) => {
        if(data.success){
          localStorage.setItem('loggedIn', data.success)
          this.user.setData(this.form.value)
          this.router.navigateByUrl('/profile');
        }
      });
    }
  }

}
