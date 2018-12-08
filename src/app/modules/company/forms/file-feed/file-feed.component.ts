import { Component, OnInit, Output } from '@angular/core';
import { Subject } from '../../../../../../node_modules/rxjs';
import { EVENTS } from '../../../../constants/common/common.service';

@Component({
  selector: 'app-file-feed',
  templateUrl: './file-feed.component.html',
  styleUrls: ['./file-feed.component.css']
})
export class FileFeedComponent implements OnInit {

  @Output('navigationEvent') navigationEvent: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  onPrevClick() {
    this.navigationEvent.next(EVENTS.PREVIOUS)
  }

  onNextClick() {
    this.navigationEvent.next(EVENTS.NEXT)
  }

}
