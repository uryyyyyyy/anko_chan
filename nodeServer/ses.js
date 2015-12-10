

var AWS = require('aws-sdk');
var ses = new AWS.SES({region: 'us-east-1', sslEnabled: true});

exports.send = function(text, cb) {
 
  var params = {
    Source: 'koki305@gmail.com',
    Destination: {
      ToAddresses: ['koki305@gmail.com'],
    },
    Message: {
      Subject: {
        Data: '【Feedback】'
      },
      Body: {
        Text: {
          Data: text
        }
      }
    }
  };
   
  ses.sendEmail(params, function (err, data) {
    if (data && cb) {
      cb(data.MassageId);
      }
  });
};
