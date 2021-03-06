import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomReuseStrategy } from './shared/custom-reuse-strategy';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
  ],
  // providers: [{
  //   provide: RouteReuseStrategy,
  //   useClass: CustomReuseStrategy,
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
