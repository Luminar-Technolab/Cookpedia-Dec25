import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { AllRecipes } from './all-recipes/all-recipes';
import { Users } from './users/users';
import { Downloads } from './downloads/downloads';
import { Feedbacks } from './feedbacks/feedbacks';
import { ManageRecipe } from './manage-recipe/manage-recipe';
import { Sidebar } from './sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search-pipe';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
  declarations: [
    Dashboard,
    AllRecipes,
    Users,
    Downloads,
    Feedbacks,
    ManageRecipe,
    Sidebar
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    AsyncPipe,
    FormsModule,
    SearchPipe,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    BaseChartDirective
  ],
  providers:[
    provideNativeDateAdapter(),provideCharts(withDefaultRegisterables())
  ]
})
export class AdminModuleModule { }
