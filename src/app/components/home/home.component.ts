import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddtweetComponent } from '../addtweet/addtweet.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  location: string; // png
  constructor(public dlg: MatDialog) {}

  ngOnInit() {
    this.location = '../../../assets/images/png/pin.png';
  }
  addTweet(): void {
   const dlgRef = this.dlg.open(AddtweetComponent);
  }
}
