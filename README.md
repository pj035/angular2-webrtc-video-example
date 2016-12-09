# WebRTC Video Chat Example with Angular 2 and TypeScript

Small example on how to use WebRTC with TypeScript and Angular 2 to build a small video chat.
Only runs in a local network due to missing configured ICE server.

## Start Server
1. Navigate to `./backend` 
2. Install dependencies
  
    `$ npm install`

3. Build server 

    `$ npm run build`

4. Start server on port 3000

    `$ npm start`

## Serve frontend
1. Install [Angular-CLI](https://github.com/angular/angular-cli)

2. Navigate to `./frontend`

3. Serve with Angular-CLI

    `$ ng serve`

## Notes
- Currently no ICE servers are configured 
  - Therefor the project only runs on a local network.
  - To use it from different devices inside your network,
  you have to change the address, that the socket is using to connect to the backend.
  The address can be found in the file `./frontend/src/app/webrtc-chat/shared/webrtc-client-connection.service.ts`
  - Angular-CLI can listen to all interfaces by using `ng serve --host 0.0.0.0` 
- Chrome uses deprecated API's of WebRTC due to the problem in [webrtc/adapter #361](https://github.com/webrtc/adapter/issues/361)

## ToDo's
- Add ICE config
- Pretty up the whole thing :-) 