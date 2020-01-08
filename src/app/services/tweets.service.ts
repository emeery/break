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
              completado: t.completado
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
    const tweetData: Tweet = {id: null, descripcion: title, like: false};
    // console.log('t',tweet);
    this.http.post('http://localhost:8090/tweet', tweetData)
    .subscribe(res => {
      this.getTweets();

    });

  }
  deleteTweet(id: string) {
    return this.http.delete<{mensaje: string}>(
      'http://localhost:8090/tweet/' + id);
  }
  getTweetListener() {
    return this.tweetChanged.asObservable();
  }
}
