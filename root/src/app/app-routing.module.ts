import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceXContainerComponent } from './components/space-x-container/space-x-container.component';


const routes: Routes = [{
  path: '',
  component: SpaceXContainerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
