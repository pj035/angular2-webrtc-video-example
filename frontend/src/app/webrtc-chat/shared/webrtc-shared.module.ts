import { NgModule } from '@angular/core';

import { WebRTCClientStore } from './webrtc-client.store.service';
import { WebRTCConnectionService } from './webrtc-client-connection.service';

@NgModule({
  providers: [
    WebRTCClientStore,
    WebRTCConnectionService
  ]
})
export class WebRTCSharedModule { }