import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddtweetComponent } from 'src/app/shared/addtweet/addtweet.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  location: string; // png
  calendar: string;
  constructor(public dlg: MatDialog) {}

  ngOnInit() {
    this.location = '../../../assets/images/png/pin.png';
    this.calendar = '../../../assets/images/png/calendar.png';
  }
  addTweet(): void {
   const dlgRef = this.dlg.open(AddtweetComponent);
  }
}
