import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddtweetComponent } from 'src/app/shared/addtweet/addtweet.component';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 2, color: 'rgb(34, 36, 41)'},

  ];
  location: string; // png
  constructor(public dlg: MatDialog) {}

  ngOnInit() {
    this.location = '../../../assets/images/png/pin.png';
  }
  addTweet(): void {
   const dlgRef = this.dlg.open(AddtweetComponent);
  }
}
