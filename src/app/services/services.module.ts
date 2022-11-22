import { ModuleWithProviders,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from './items.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { 
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [ItemsService]
    };
  }
}
