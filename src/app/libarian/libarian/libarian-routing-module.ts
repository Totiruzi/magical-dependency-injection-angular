import { LibarianComponent } from './libarian.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
  path: '',
  component: LibarianComponent  
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LibarianRoutingModule {}