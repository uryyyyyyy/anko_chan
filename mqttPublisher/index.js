
//app deps
const deviceModule = require('aws-iot-device-sdk').device;
var AWS = require('aws-sdk');

//access dynamo

var func = function(device, context){
    var dynamodb = new AWS.DynamoDB({region: 'ap-northeast-1'});

    var params = {
        TableName: 'mySample',
        Select: "ALL_ATTRIBUTES"
    };

    dynamodb.scan(params, function (err, res) {
        res.Items.forEach(function(v){
            var status = {active: v.active.BOOL, topic: v.topic.S};
            console.log('publish: ' + status.topic);
            device.publish(status.topic, JSON.stringify({
                active: status.active }));
        });

        var close = function(){
            device.end();
            if(context){
                context.succeed("finish" + res);
            }
        };
        setTimeout(close,1000);
    });
};
console.log('start');
const device = deviceModule({
    keyPath: "./cert/thing-private-key.pem",
    certPath: "./cert/cert.pem",
    caPath: "./cert/rootCA.pem",
    //clientId: clientId,
    region: "ap-northeast-1"
    //reconnectPeriod: reconnectPeriod
});

device.on('error', function(error) {
    console.log('error', error);
});

function processTest(status) {
    console.log('publish: ' + status.topic);
    device.publish(status.topic, JSON.stringify({
        active: status.active }));
}

func(device);

//exports.handler = function(event, context) {
//    func(device, context);
//};