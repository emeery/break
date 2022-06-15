import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  location: string; 
  calendar: string;
  constructor(public dlg: MatDialog) {}

  ngOnInit() {
    this.location = '../../../assets/images/png/pin.png';
    this.calendar = '../../../assets/images/png/calendar.png';
  }

}
