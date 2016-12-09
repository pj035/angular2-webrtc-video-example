import { NgModule } from '@angular/core';

import { MediaStreamService } from './mediastream.service';
import { WebRTCSharedModule } from '../webrtc-chat/shared';

@NgModule({
  providers: [
    MediaStreamService
  ],
  imports: [
    WebRTCSharedModule
  ]
})
export class SharedModule { }