import { Component, OnInit, OnDestroy } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';
import { Tweet } from 'src/app/models/tweet';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EdittweetComponent } from '../../edittweet/edittweet.component';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, OnDestroy {
  tweets: Tweet[] = [];
  cargando = false;
  estaAut = false;
<<<<<<< HEAD
  AutListenS: Subscription;
=======
  private tweetSubs: Subscription;
  private autSubs: Subscription;
>>>>>>> 8ad7c6938a82c104a5a4aab55fe02537ac939cbb
  constructor(
    public tService: TweetsService,
    private autService: AuthService,
    public dlg: MatDialog,
    private autService: AuthService
    // public route: ActivatedRoute,

     ) { }

  ngOnInit() {
    // this.getTweets();
  }
  getTweets() {
    this.tService.getTweets();
    this.cargando = true;
    this.tweetSubs = this.tService.getTweetListener()
    .subscribe((twt: Tweet[]) => {
      this.cargando = false;
      this.tweets = twt;
    });
    this.estaAut = this.autService.getEstaAut();
    this.autSubs = this.autService.getEstaAutListen()
    .subscribe(aut => {
      this.estaAut = aut;
    });
    this.estaAut = this.autService.getIsAut();
    this.autService.getAutListen()
    .subscribe(aut => {
      this.estaAut = aut;
    });
  }
  onEdit(tweetId: string) {
    this.tService.getTweet(tweetId)
    .subscribe(twet => {
        console.log('r', twet);
    });
    this.dlg.open(EdittweetComponent, {data: {id: tweetId }});
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
