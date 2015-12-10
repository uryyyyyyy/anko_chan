
var mqtt = require('mqtt');
var fs = require('fs');
var KEY = fs.readFileSync("./cert/thing-private-key.pem");
var CERT = fs.readFileSync("./cert/cert.pem");
var TRUSTED_CA_LIST = fs.readFileSync("./cert/rootCA.pem");

var PORT = 8883;
var HOST = 'data.iot.ap-northeast-1.amazonaws.com';


var options = {
    port: PORT,
    host: HOST,
    key: KEY,
    cert: CERT,
    protocol: "mqtts",
    protocolId: "MQTT",
    protocolVersion : 4,
    rejectUnauthorized : true,
    requestCert: true,
    //The CA list will be used to determine if server is authorized
    ca: TRUSTED_CA_LIST
};

var client = mqtt.connect(options);

client.on('connect', function(){
    console.log('Connected');
});

var publish = function(status){
    client.publish(status.topic, '{"active": ' + status.active + '}');
};
exports.publish = publish;