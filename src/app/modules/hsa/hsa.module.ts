import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//component
import { FormBoardComponent } from './form-board/form-board.component';
import { SummaryComponent } from './forms/summary/summary.component';
import { HsaComponent } from './forms/hsa/hsa.component';

//routes
import { hsaRoutes } from './hsa.routes';

@NgModule({
  imports: [
    RouterModule.forChild(hsaRoutes)
  ],
  declarations: [
    FormBoardComponent,
    HsaComponent,
    SummaryComponent
  ],
  entryComponents: [
    HsaComponent,
    SummaryComponent
  ]
})
export class HsaModule { }