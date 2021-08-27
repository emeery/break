import { Component, OnInit, OnDestroy } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';
import { Tweet } from 'src/app/models/tweet';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/auth/auth.service';
import { EdittweetComponent } from '../../shared/edittweet/edittweet.component';
import { AddtweetComponent } from '../../shared/addtweet/addtweet.component';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, OnDestroy {
  tweets: Tweet[] = [];
  cargando = false;
  isAuth = false;
  private tweetSubs: Subscription;
  private autSubs: Subscription;
  constructor(
    public tService: TweetsService,
    private autService: AuthService,
    public dlg: MatDialog,
     ) { }

  ngOnInit() {
    this.getTweets();
  }
  getTweets() {
    this.tService.getTweets();
    this.cargando = true;
    this.tweetSubs = this.tService.getTweetListener()
    .subscribe((twt: Tweet[]) => {
      this.cargando = false;
      this.tweets = twt;
    });
    this.isAuth = this.autService.getIsAuth();
    this.autSubs = this.autService.getAutListen()
    .subscribe(aut => {
      this.isAuth = aut;
    });
    this.isAuth = this.autService.getIsAuth();
    this.autService.getAutListen()
    .subscribe(aut => {
      this.isAuth = aut;
    });
  }
  onEdit(tweetId: string) {
    this.tService.getTweet(tweetId)
    .subscribe(twet => {});
    this.dlg.open(EdittweetComponent, {data: {id: tweetId }});
  }
  onAddTweet() {
    this.dlg.open(AddtweetComponent);
   }
  onDelete(tweetId: string) {
    this.tService.deleteTweet(tweetId).subscribe(() => {
      this.tService.getTweets();
    });
  }
  ngOnDestroy() {
    this.tweetSubs.unsubscribe();
    this.autSubs.unsubscribe();
  }
}
