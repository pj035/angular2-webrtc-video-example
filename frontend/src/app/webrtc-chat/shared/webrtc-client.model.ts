import { ImmutableModel } from '../../shared/immutable-model';

export interface IWebRTCClient {
  id?: string;
  stream: MediaStream;
}

export class WebRTCClient extends ImmutableModel<IWebRTCClient, WebRTCClient> {
  constructor(data: IWebRTCClient) {
    super(WebRTCClient, data);
  }

  get id(): string {
    return this.data.get('id');
  }

  get stream(): MediaStream {
    return this.data.get('stream');
  }

  setId(val: string): WebRTCClient {
    return this.setValue('id', val);
  }

  setStream(val: MediaStream): WebRTCClient {
    return this.setValue('stream', val);
  }
}