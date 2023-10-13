import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardSuperiorComponent } from './card-superior/card-superior.component';
import { CardInferiorComponent } from './card-inferior/card-inferior.component';

@NgModule({
  declarations: [
    AppComponent,
    CardSuperiorComponent,
    CardInferiorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
