import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { ItemsManagerComponent } from './components/items-manager/items-manager.component';
import { HistoryComponent } from './history.component';
import { ItemsService } from '../services/items.service';

@NgModule({
  declarations: [ItemsManagerComponent, HistoryComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ],
  // providers: [ ItemsService]
})
export class HistoryModule { }
