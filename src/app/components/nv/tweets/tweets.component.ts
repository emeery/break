import { Component, OnInit, OnDestroy } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';
import { Tweet } from 'src/app/models/tweet';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EdittweetComponent } from '../../edittweet/edittweet.component';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, OnDestroy {
  tweets: Tweet[] = [];
  private tweetSubs: Subscription;
  constructor(
    public tService: TweetsService,
    public dlg: MatDialog,
    public route: ActivatedRoute ) { }

  ngOnInit() {
    this.getTweets();
    // this.route.paramMap.subscribe((pM: ParamMap) => {
    //   if(pM.has('tweetId')) {}
    // });
  }
  getTweets() {
    this.tService.getTweets();
    this.tweetSubs = this.tService.getTweetListener()
    .subscribe((twt: Tweet[]) => {
      this.tweets = twt;
      console.log('tt', this.tweets);
    });
  }
  onEdit(tweetId: string) {
    this.tService.getTweet(tweetId).subscribe(twet => {
      // console.log('tweet', twet);
    })
    this.dlg.open(EdittweetComponent, {data: {id: tweetId }});


  }
  onDelete(tweetId: string) {
    this.tService.deleteTweet(tweetId).subscribe(() => {
      this.tService.getTweets();
    });
  }
  ngOnDestroy() {
    this.tweetSubs.unsubscribe();
  }
}
