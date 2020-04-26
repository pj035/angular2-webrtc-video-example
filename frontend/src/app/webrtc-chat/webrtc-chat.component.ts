import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { WebRTCClientStore, WebRTCConnectionService } from './shared';
import { WebRTCClient } from './shared/webrtc-client.model';

@Component({
  selector: 'webrtc-chat',
  templateUrl: './webrtc-chat.component.html'
})
export class WebRTCChatComponent {
  public webrtcClients: WebRTCClient[];
  private blobs: string[] = [];

  constructor(
    private webrtcClientStoreService: WebRTCClientStore,
    private webrtcConnectionService: WebRTCConnectionService,
    private sanitizer: DomSanitizer
  ) {
    this.webrtcClientStoreService.clients$.subscribe(
      clientList => this.webrtcClients = clientList.toArray(),
      err => console.error('Error updating the client list:', err)
    );
  } 
  
  public onClickConnectToRoom() {
    this.webrtcConnectionService.connectToRoom();
  }

  // DEPRECATED
  public getVideoStreamURL(stream: MediaStream): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(stream));
  }
}