import { Component, OnInit, Output } from '@angular/core';
import { EVENTS } from '../../../../constants/common/common.service';
import { Subject } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-hsa',
  templateUrl: './hsa.component.html',
  styleUrls: ['./hsa.component.css']
})
export class HsaComponent implements OnInit {

  @Output('navigationEvent') navigationEvent: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  onNextClick() {
    this.navigationEvent.next(EVENTS.NEXT)
  }

}
