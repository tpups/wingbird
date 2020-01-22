import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTimeComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CurrentTimeComponent
  ],
  providers: [],
  entryComponents: [CurrentTimeComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  
  ngDoBootstrap(){
    customElements.define('current-time', createCustomElement(CurrentTimeComponent,
                                                        {injector: this.injector}));
  }
}
