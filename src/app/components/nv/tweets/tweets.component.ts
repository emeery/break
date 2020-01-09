import { Component, OnInit, OnDestroy } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';
import { Tweet } from 'src/app/models/tweet';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, OnDestroy {
  tweets: Tweet[] = [];
  private tweetSubs: Subscription;
  constructor(
    public tServ: TweetsService,
    public dlg: MatDialog,
    public route: ActivatedRoute ) { }

  ngOnInit() {
    this.getTweets();
    this.route.paramMap.subscribe((pM: ParamMap) => {
      if(pM.has('tweetId')) {}
    });
  }
  getTweets() {
    this.tServ.getTweets();
    this.tweetSubs = this.tServ.getTweetListener()
    .subscribe((twt: Tweet[]) => {
      this.tweets = twt;
      console.log('tt', this.tweets);
    });
  }
  onEdit(tweetId: string) {
    console.log('ed',tweetId);
    // this.tServ.deleteTweet(tweetId).subscribe(() => {
    //   this.tServ.getTweets();
    // });
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
