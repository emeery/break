import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {  HttpClient } from '@angular/common/http';
import { Tweet } from '../models/tweet';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  private tweets: Tweet[] =  [];
  private tweetChanged = new Subject<Tweet[]>();
  constructor(private http: HttpClient) { }
  getTweets() {
    this.http.get<{mensaje: string; tweets: any}>(
      'http://localhost:8090/tweet')
    .pipe(
      map((res) => {
        return res.tweets.map(t => {
          return {
              id: t._id,
              descripcion: t.descripcion,
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
    const tweetData: Tweet = {id: null, descripcion: title};
    // console.log('t',tweet);
    this.http.post('http://localhost:8090/tweet', tweetData)
    .subscribe(res => {
      this.getTweets();
    });
  }
  getTweet(ide: string) {
    return this.http
    .get<{_id: string, descripcion: any }>(
      'http://localhost:8090/tweet/' + ide)
      .pipe(
        map((res) => {
          return {id: res._id, descripcion: res.descripcion};
        })
      );
  }
  editTweet(id: string, desc: string) {
    const tweet: Tweet = {id, descripcion: desc};
    this.http.put('http://localhost:8090/tweet/' + id, tweet)
    .subscribe(res => {
      // console.log('res', res);
      this.getTweets();
    } );
  }
  deleteTweet(id: string) {
    return this.http.delete<{mensaje: string}>(
      'http://localhost:8090/tweet/' + id);
  }
  getTweetListener() {
    return this.tweetChanged.asObservable();
  }
}
