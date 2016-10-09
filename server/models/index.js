var db = require('../db');

module.exports = {

  messages: {
    get: function (callback) {
      // fetch all messages
      // text, username, roomname, id
      var queryStr = 'select messages.id, messages.text, messages.room_name as roomname, users.user_name as username \
                      from messages  join users on (messages.user_id = users.user_id) \
                      order by messages.id desc';
      db.query(queryStr, function(err, results) {
        console.log('result: ', results)
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into messages(text, user_id, room_name) \
                      value (?, (select user_id from users where user_name = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function (callback) {
      // fetch all users
      var queryStr = 'select user_id as id, user_name as username from users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (username, callback) {
      // create a user
      console.log(username)
      var queryStr = 'insert into users (user_name) values (?)';
      db.query(queryStr, username , function(err, results) {
        callback(err, results);
      });
    }
  }
  };