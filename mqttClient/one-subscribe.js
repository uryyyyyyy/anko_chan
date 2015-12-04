
//app deps
const deviceModule   = require('aws-iot-device-sdk').device;

//begin module

function processTest() {


const device = deviceModule({
  keyPath: "XXX/thing-private-key.pem",
  certPath: "XXX/cert.pem",
  caPath: "XXX/rootCA.pem",
  //clientId: clientId,
  region: "ap-northeast-1"
  //reconnectPeriod: reconnectPeriod
});

var timeout;
var count=0;


device
  .on('connect', function() {
    console.log('connect');
    device.subscribe('topic_1');
    });
device 
  .on('close', function() {
    console.log('close');
    clearInterval( timeout );
    count=0;
  });
device 
  .on('reconnect', function() {
    console.log('reconnect');
  });
device 
  .on('offline', function() {
    console.log('offline');
    clearInterval( timeout );
    count=0;
  });
device
  .on('error', function(error) {
    console.log('error', error);
    clearInterval( timeout );
    count=0;
  });
device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });

}


processTest();
