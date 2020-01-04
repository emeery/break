import { Component, OnInit } from '@angular/core';
import {Tweet} from '../models/tweet';
// class Tweet {
//   description: string;
//   user: boolean
// }
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {
  public tweets: Tweet[] =  [
    new Tweet('Typically said to indicate that any further investigation into a situation may lead to harm.', false, 'Jerry'),
    new Tweet('The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.', true, 'Emma'),
    new Tweet(' A rhetorical question used by a person who feels they are being given less consideration than someone else', false, 'Peter')
  ];
  constructor() { }

  ngOnInit() {
    console.log('tw', this.tweets);
  }

}
