import { Component, OnInit, Output } from '@angular/core';
import { EVENTS } from '../../../../constants/common/common.service';
import { Subject } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-online-oe',
  templateUrl: './online-oe.component.html',
  styleUrls: ['./online-oe.component.css']
})
export class OnlineOeComponent implements OnInit {

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
