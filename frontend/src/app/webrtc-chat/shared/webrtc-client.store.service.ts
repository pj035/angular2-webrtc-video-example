import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { List } from "immutable";
import { BehaviorSubject } from "rxjs/Rx";

import { WebRTCClient } from './webrtc-client.model';

@Injectable()
export class WebRTCClientStore {
  private _clients: BehaviorSubject<List<WebRTCClient>> = new BehaviorSubject(List([]));

  constructor(){}

  public get clients$(): Observable<List<WebRTCClient>> {
    return this._clients.asObservable();
  }

  public addClient(newClient: WebRTCClient): void {
    this._clients.next(this._clients.getValue().push(newClient));
  }

  public removeClient(clientId: string): void {
    let clientList = this._clients.getValue();
    const removeIndex = clientList.findIndex(c => c.id === clientId);
    this._clients.next(clientList.remove(removeIndex));
  }
}