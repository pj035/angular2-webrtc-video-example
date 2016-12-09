import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared';
import { WebRTCChatComponent } from './webrtc-chat.component';

@NgModule({
  declarations: [
    WebRTCChatComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [
    WebRTCChatComponent
  ]
})
export class WebRTCChatModule { }