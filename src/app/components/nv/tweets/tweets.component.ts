import { Component, OnInit, OnDestroy } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';
import { Tweet } from 'src/app/models/tweet';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, OnDestroy {
  tweets: Tweet[] = [];
  private tweetSubs: Subscription;
  constructor(public tServ: TweetsService, public dlg: MatDialog) { }

  ngOnInit() {
    this.getTweets();
  }
  getTweets() {
    this.tServ.getTweets();
    this.tweetSubs = this.tServ.getTweetListener()
    .subscribe((twt: Tweet[]) => {
      this.tweets = twt;
      console.log('tt', this.tweets);
    });
  }
  onDelete(tweetId: string) {
    this.tServ.deleteTweet(tweetId).subscribe(() => {
      this.tServ.getTweets();
    });
  }

  ngOnDestroy() {
    this.tweetSubs.unsubscribe();
  }
}
