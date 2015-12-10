
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({region: 'ap-northeast-1'});

var getAll = function(cb){

    var params = {
        TableName: 'mySample',
        Select: "ALL_ATTRIBUTES"
    };

    dynamodb.scan(params, function (err, res) {
        if(err){
            console.log(err);
        }
        cb(res);
    });
};

exports.getAll = getAll;

var postStatus = function(status, cb){

    var params = {
        TableName: 'mySample',
        Key: {
            "id": {"N": status.id} // Hashキー
        },
        AttributeUpdates: {
            "active": {
                'Action': 'PUT',
                'Value': {"BOOL": status.active}
            }
        }
    };

    dynamodb.updateItem(params, function (err, res) {
        if(err){
            console.log(err);
        }
        console.log("posted");
        if(cb){
            cb(res);
        }
    });

};

exports.postStatus = postStatus;