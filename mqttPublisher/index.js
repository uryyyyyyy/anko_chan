
//app deps
const deviceModule = require('aws-iot-device-sdk').device;
var AWS = require('aws-sdk');

//access dynamo

var func = function(cb){
    var dynamodb = new AWS.DynamoDB({region: 'ap-northeast-1'});

    var params = {
        TableName: 'mySample',
        Select: "ALL_ATTRIBUTES"
    };

    dynamodb.scan(params, function (err, res) {
        res.Items.forEach(function(v){
            var ss = {active: v.active.BOOL, topic: v.topic.S};
            cb(ss)
        });
    });
};

const device = deviceModule({
    keyPath: "./cert/thing-private-key.pem",
    certPath: "./cert/cert.pem",
    caPath: "./cert/rootCA.pem",
    //clientId: clientId,
    region: "ap-northeast-1"
    //reconnectPeriod: reconnectPeriod
});


//begin module
function processTest(status) {

    device
        .on('connect', function() {
            console.log('connect: ' + status.topic);
            device.publish(status.topic, JSON.stringify({
                active: status.active }));
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
            count=0;
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

func(processTest);
