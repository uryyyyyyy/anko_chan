
var http = require('http');
var dynamo = require('./dynamo');
var ses = require('./ses');
var mqtt = require('./mqtt');
var fs = require("fs");

http.createServer(function (req, res) {
    if(req.url == "/get" && req.method == "GET"){
        var cb1 = function(v){
            var arr = [];
            v.Items.forEach(function (v) {
                var status = {
                    active: !v.active.BOOL,
                    topic: v.topic.S,
                    id: v.id.N,
                    name: v.name.S
                };
                console.log(status);
                arr.push(status);
            });
            res.end(JSON.stringify(arr));
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        dynamo.getAll(cb1);
    }else if(req.url === "/post" && req.method == "POST"){
        var fullBody = '';

        req.on('data', function(chunk) {
            // append the current chunk of data to the fullBody variable
            fullBody += chunk.toString();
        });

        req.on('end', function() {
            var status = JSON.parse(fullBody);
            console.log(status);
            dynamo.postStatus(status);
            ses.send("text");
            mqtt.publish(status);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('posted');
        });
    }else{
        fs.readFile('./index.html', function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHeader(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        });
    }
}).listen(8080, '127.0.0.1');

console.log("start");
