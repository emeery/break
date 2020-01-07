import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTweetComponent } from '../nv/tweets/addtweet.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pen: string;
  constructor(public dlg: MatDialog) {}

  ngOnInit() {
    this.pen = '../../../assets/images/png/edit.png';
  }
  addTweet() {
   this.dlg.open(AddTweetComponent, {panelClass: 'custom-add'});
  }
}
