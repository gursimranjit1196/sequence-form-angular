import { Component, OnInit, Output } from '@angular/core';
import { Subject } from '../../../../../../node_modules/rxjs';

import { EVENTS } from '../../../../constants/common/common.service'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Output('navigationEvent') navigationEvent: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  onNextClick() {
    this.navigationEvent.next(EVENTS.NEXT)
  }

}
