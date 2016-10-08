var db = require('../db');
db.dbConnection.connect();

module.exports = {
  messages: {
    get: function () {
      var queryString = 'SELECT text FROM messages;'
      db.dbConnection.query(queryString, function(err, results) {
        return results;
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

