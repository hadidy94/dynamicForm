import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule , NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { AddTemplatesComponent } from './components/add-templates/add-templates.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';





@NgModule({
  declarations: [
    AppComponent,
    AddTemplatesComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    AccordionModule,
    DialogModule,
    DropdownModule,
    NgbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
