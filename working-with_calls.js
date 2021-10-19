function callEvent() {                                          
  xapi.event.on('OutgoingCallIndication', (event) => {  //Listen for outgoing calls
    xapi.status.get('Call ' + event.CallId).then(verifyCall);
  });
