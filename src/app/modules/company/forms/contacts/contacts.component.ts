import { Component, OnInit, Output } from '@angular/core';
import { EVENTS } from '../../../../constants/common/common.service';
import { Subject } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

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
