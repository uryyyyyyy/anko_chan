
//app deps
const deviceModule = require('aws-iot-device-sdk').device;

//begin module

var topic = process.argv[2];

const device = deviceModule({
    keyPath: "./cert/thing-private-key.pem",
    certPath: "./cert/cert.pem",
    caPath: "./cert/rootCA.pem",
    //clientId: clientId,
    region: "ap-northeast-1"
    //reconnectPeriod: reconnectPeriod
});

device
    .on('message', function(topic, payload) {
        console.log('message', topic, payload.toString());
    });

console.log('subscribe: ' + topic);
device.subscribe(topic);
