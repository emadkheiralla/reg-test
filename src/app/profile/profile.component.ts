import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData: any;

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.getData().subscribe((data: any) => {
      this.userData = data;
      console.log(this.userData);
    });
  }

}
