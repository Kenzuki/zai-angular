import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localePl from '@angular/common/locales/pl'
registerLocaleData(localePl);

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { registerLocaleData } from '@angular/common';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule
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
