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
  pen: string;
  constructor(public dlg: MatDialog) {}

  ngOnInit() {
    // this.setForm();
    this.pen = '../../../assets/images/png/edit.png';
  }
  addTweet(): void {
   const dlgRef = this.dlg.open(AddtweetComponent);
  //  dlgRef.afterClosed().subscribe(result => {
  //   console.log('r', result);
  // });
  }
}
