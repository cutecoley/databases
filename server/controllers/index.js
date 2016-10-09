var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('before db')
      models.messages.get(function(err, results){
        console.log('result from db:' , results)
        res.end(JSON.stringify({results: results}))
      });
      res.writeHead(200, {'Content-Type': 'application/json'});
      // res.end(JSON.stringify({results: [{'username': 'Miles', 'roomname': '', objectId: '1', 'text': 'Hello world!'}]}));
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      models.messages.post(req.body, function(err, result) {
        console.log('messages Controller error ', err);

        if (err) {
          console.log('Error in  messages controller post');
          throw err;
        } else {
          res.writeHead(201, {'Content-Type': 'application/json'});
        }
          res.end('{}')
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body.username, function(err) {
        if (err) {
          console.log('Error in controllers users post');
          throw err;
        }
        res.writeHead(201, {'Content-Type': 'application/json'});
      });
    }
  }
};

