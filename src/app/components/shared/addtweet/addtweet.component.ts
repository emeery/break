import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-addtweet',
  templateUrl: './addtweet.component.html',
  styleUrls: ['./addtweet.component.scss']
})
export class AddtweetComponent implements OnInit {
  tweetForm: FormGroup;

  constructor(
    public twtService: TweetsService,
    private formBuilder: FormBuilder,
    private dlgRef: MatDialogRef<AddtweetComponent>
    ) { }

  ngOnInit() {
    this.tweetForm = this.formBuilder.group({
      tweet: ['', Validators.required]
    });
  }
  onSubmit() {
    this.twtService.addTweet(this.tweetForm.value.tweet);
    this.dlgRef.close();
  }
}
