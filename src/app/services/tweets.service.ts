import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Tweet } from '../models/tweet';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/tweet/';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  private tweets: Tweet[] =  [];
  private tweetChanged = new Subject<Tweet[]>();
  constructor(private http: HttpClient) { }
  getTweets() {
    this.http.get<{msg: string; tweets: any}>(
     BACKEND_URL + 'ts')
    .pipe(
      map((res) => {
        console.log('r', res);
        return res.tweets.map(t => {
          return {
              id: t._id,
              description: t.description,
          };
        });
      })
    )
    .subscribe(twtD => {
      this.tweets = twtD;
      this.tweetChanged.next([...this.tweets]);
    });
  }
  addTweet(title: string) {
    const tweetData: Tweet = {id: null, description: title}
    this.http.post(BACKEND_URL + 'create', tweetData)
    .subscribe(res => {
      this.getTweets();
    });
  }
  getTweet(ide: string) {
    return this.http
    .get<{_id: string, description: any }>(
        BACKEND_URL + ide)
      .pipe(
        map((res) => {
          return {id: res._id, descripcion: res.description};
        })
      );
  }
  editTweet(id: string, desc: string) {
    const tweet: Tweet = {id, description: desc};
    this.http.put(BACKEND_URL + id, tweet)
    .subscribe(res => {
      this.getTweets();
    } );
  }
  deleteTweet(id: string) {
    return this.http.delete<{mensaje: string}>(
      BACKEND_URL + id);
  }
  getTweetListener() {
    return this.tweetChanged.asObservable();
  }
}
