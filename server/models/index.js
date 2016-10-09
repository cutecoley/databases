var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT text FROM messages;'
      db.dbConnection.query(queryString, function(err, results) {
        callback(results);
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

