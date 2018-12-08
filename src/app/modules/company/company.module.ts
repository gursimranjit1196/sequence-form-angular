import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//component
import { FormBoardComponent } from './form-board/form-board.component';
import { CompanyComponent } from './forms/company/company.component';

//routes
import { companyRoutes } from './company.routes';
import { MatricsComponent } from './forms/matrics/matrics.component';
import { AffiliatesComponent } from './forms/affiliates/affiliates.component';
import { ContactsComponent } from './forms/contacts/contacts.component';
import { DepartmentsComponent } from './forms/departments/departments.component';
import { FileFeedComponent } from './forms/file-feed/file-feed.component';
import { PayScheduleComponent } from './forms/pay-schedule/pay-schedule.component';
import { SummaryComponent } from './forms/summary/summary.component';

@NgModule({
  imports: [
    RouterModule.forChild(companyRoutes)
  ],
  declarations: [
    FormBoardComponent,
    CompanyComponent,
    MatricsComponent,
    AffiliatesComponent,
    ContactsComponent,
    DepartmentsComponent,
    FileFeedComponent,
    PayScheduleComponent,
    SummaryComponent
  ],
  entryComponents: [
    CompanyComponent,
    MatricsComponent,
    AffiliatesComponent,
    ContactsComponent,
    DepartmentsComponent,
    FileFeedComponent,
    PayScheduleComponent,
    SummaryComponent
  ]
})
export class CompanyModule { }