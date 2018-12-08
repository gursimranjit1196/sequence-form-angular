import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//component
import { FormBoardComponent } from './form-board/form-board.component';
import { GeneralInfoComponent } from './forms/general-info/general-info.component';
import { OnlineOeComponent } from './forms/online-oe/online-oe.component';
import { SummaryComponent } from './forms/summary/summary.component';

//routes
import { fsaRoutes } from './fsa.routes';

@NgModule({
  imports: [
    RouterModule.forChild(fsaRoutes)
  ],
  declarations: [
    FormBoardComponent,
    GeneralInfoComponent,
    OnlineOeComponent,
    SummaryComponent
  ],
  entryComponents: [
    GeneralInfoComponent,
    OnlineOeComponent,
    SummaryComponent
  ]
})
export class FsaModule { }