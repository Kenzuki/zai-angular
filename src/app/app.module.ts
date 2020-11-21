import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localePl from '@angular/common/locales/pl'
registerLocaleData(localePl);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RatingDirective } from './directives/rating.directive';
import { registerLocaleData } from '@angular/common';
import { AddOrEditDialogComponent } from './components/add-or-edit-dialog/add-or-edit-dialog.component';
import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    NavbarComponent,
    AddOrEditDialogComponent,
    ConfirmationDialog,
    RatingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
