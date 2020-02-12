import { Component, OnInit, Inject } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Tweet } from 'src/app/models/tweet';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edittweet',
  templateUrl: './edittweet.component.html',
  styleUrls: ['./edittweet.component.scss']
})
export class EdittweetComponent implements OnInit {
  private perfilId: string;
  // private tweet: Tweet;
  tweetForm: FormGroup;
  constructor(
    public tService: TweetsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<EdittweetComponent>) {}

  ngOnInit() {
    this.initForma();
    this.tService.getTweet(this.data.id)
    .subscribe(dta => {
      this.perfilId = dta.id;
      this.tweetForm.setValue({
        descripcion: dta.descripcion
      });
    });
  }
  private initForma() {
    this.tweetForm = this.formBuilder.group({
      descripcion: ['', Validators.required]
    });
  }
  onSubmit() {
    this.tService.editTweet(
      this.perfilId,
      this.tweetForm.value.descripcion
    );
    this.dialogRef.close();

  }
}
