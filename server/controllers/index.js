var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(res);
      models.messages.get(function(results) {
        console.log(results);
        res.json(results);
        //res.end(results);
        //return results;
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

