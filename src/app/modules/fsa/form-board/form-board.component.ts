import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from '../../../../../node_modules/rxjs';
import { takeUntil } from "rxjs/operators";

import * as Constants from '../../../constants'
import { FormSequenceHandler } from '../../../utils/form-seq-handler/form-seq-handler.service'

@Component({
  selector: 'app-form-board',
  templateUrl: './form-board.component.html',
  styleUrls: ['./form-board.component.css']
})
export class FormBoardComponent implements OnInit, OnDestroy {

  public activeForm:number = 0
  private unsubscribe: Subject<void> = new Subject();

  @ViewChild('modalButton') modalButton;
  @ViewChild('modalBody', { read: ViewContainerRef }) modalBody;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver  
  ) { }

  ngOnInit() {
    this.initializeValues()
    this.openModal()
  }

  initializeValues() {
    this.activeForm = Constants.FSA_ENUM.GENERAL_INFO;
  }

  openModal() {
    let htmlEle: HTMLElement = this.modalButton.nativeElement as HTMLElement
    htmlEle.click()
  }

  onModalClick(event) {
    this.loadForm()
  }

  loadForm() {
    const { componentRef } = FormSequenceHandler.seriesFormLoad(this.componentFactoryResolver, Constants.FORM_TYPES.FSA, this.activeForm, this.modalBody)
    componentRef.instance.navigationEvent
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((res) => {
      this.onNavigation(res)
    })
  }

  onNavigation(res) {
    if (res === Constants.EVENTS.NEXT) {
      this.activeForm++
    } else if (res === Constants.EVENTS.PREVIOUS) {
      this.activeForm--
    }
    this.loadForm()
  }


  onModalClose() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
