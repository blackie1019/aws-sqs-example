// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-northeast-1'});

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2017-12-29'});

var params = {};

var posMsgParams = {
    DelaySeconds: 10,
    MessageAttributes: {
     "Title": {
       DataType: "String",
       StringValue: "AWS 30 Days"
      },
     "Author": {
       DataType: "String",
       StringValue: "Blackie"
      },
    },
    MessageBody: `XY 動手不動口！Test msg with local time:${timeInMs = Date.now()}`,
    QueueUrl: "https://sqs.ap-northeast-1.amazonaws.com/728812454107/ironman"
   };

sqs.listQueues(params, function(err, data) {
    console.log("Done listQueues")
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });

sqs.sendMessage(posMsgParams, function(err, data) {
    console.log("Done sendMessage")
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });