import { Component, OnInit, Output } from '@angular/core';
import { Subject } from '../../../../../../node_modules/rxjs';
import { EVENTS } from '../../../../constants/common/common.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  @Output('navigationEvent') navigationEvent: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  onNextClick() {
    this.navigationEvent.next(EVENTS.NEXT)
  }

}
