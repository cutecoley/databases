var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('before db')
      models.messages.get(function(err, results){
        console.log('result from db:' , results)
        res.json(results)
      });
      
      
      // res.end(JSON.stringify({results: [{'username': 'Miles', 'roomname': '', objectId: '1', 'text': 'Hello world!'}]}));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err, result) {
        
        if (err) {
          console.log('Error in  messages controller post');
          console.log('messages Controller error ', err);

          throw err;
        } else {
          res.sendStatus(201);
        }
          
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('user controller post:' , req.body)
      models.users.post(req.body.username, function(err) {
        if (err) {
          console.log('Error in controllers users post');
          throw err;
        }
        res.sendStatus(201);
        
      });
    }
  }
};

