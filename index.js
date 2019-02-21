console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'ca-central-1'});

exports.handle = function(e, ctx, callback) {

var params = {
    Item: {
        date: Date.now(),
        Amount: "100"
    },

    TableName: 'Expense_T1'
};

docClient.put(params, function(err, data){
    if(err){
        callback(err, null);
    }else{
        callback(null, data);
    }
});

}