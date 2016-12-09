import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
require('webrtc-adapter');

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { WebRTCChatModule, WebRTCChatComponent } from './webrtc-chat';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    WebRTCChatModule
  ],
  entryComponents: [
    AppComponent,
    WebRTCChatComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
