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
  private tweetSubs: Subscription;
  cargando = false;
  estaAut = false;
  AutListenS: Subscription;
  constructor(
    public tService: TweetsService,
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
    this.tweetSubs =
    this.tService.getTweetListener()
    .subscribe((twt: Tweet[]) => {
      this.cargando = false;
      this.tweets = twt;
      console.log('tt', this.tweets);
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
  }
}
