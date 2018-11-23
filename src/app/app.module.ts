import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { SingleComponent } from './single/single.component';
import { MultipleComponent } from './multiple/multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialModule,
    SingleComponent,
    MultipleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
