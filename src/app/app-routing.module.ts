import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTemplatesComponent } from './components/add-templates/add-templates.component';


const routes: Routes = [{
  path: 'add-template',
  component: AddTemplatesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
