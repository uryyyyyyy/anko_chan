
//app deps
const deviceModule = require('aws-iot-device-sdk').device;

//begin module

var topic = process.argv[2];
function processTest() {


const device = deviceModule({
  keyPath: "/media/shiba/shibaHDD/develop/aws/IoT/cert2//thing-private-key.pem",
  certPath: "/media/shiba/shibaHDD/develop/aws/IoT/cert2//cert.pem",
  caPath: "/media/shiba/shibaHDD/develop/aws/IoT/cert2//rootCA.pem",
  //clientId: clientId,
  region: "ap-northeast-1"
  //reconnectPeriod: reconnectPeriod
});

device
  .on('connect', function() {
    console.log('connect: ' + topic);
    device.subscribe(topic);
    });
device 
  .on('close', function() {
    console.log('close');
  });
device 
  .on('reconnect', function() {
    console.log('reconnect');
  });
device 
  .on('offline', function() {
    console.log('offline');
  });
device
  .on('error', function(error) {
    console.log('error', error);
  });
device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });

}


processTest();
