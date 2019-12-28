import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { TweenMax, TimelineMax, Power1 } from 'gsap';
declare var myTween: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('test', {static: false}) testRef: ElementRef;
  tTest;
  constructor() { }

  ngOnInit() {

  }
  doIt(): void {
    this.tTest = TweenMax.to(this.testRef.nativeElement, 0.3, {x: 550, ease: Power1.easeOut});
    const tl = new TimelineMax();
    tl.add(this.tTest.play());
      // this.tm.fromTo(this.box.nativeElement, 2, {x: 20}, {x: 440, ease: Power1.easeOut});
      // TweenMax.fromTo(this.box.nativeElement, 2, {y: 20}, {y: 440, ease: Bounce.easeOut});

  }
}
