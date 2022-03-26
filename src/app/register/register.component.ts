import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    bio: new FormControl(''),
  });
  url = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';

  constructor(private http: HttpClient, private router: Router, private user: UserService) { }

  ngOnInit(): void {
    
  }

  submit() {
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
