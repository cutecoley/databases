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
      var queryString = 'INSERT INTO messages(user_id, text, room_name) VALUES(?, ?, ?)';

      db.query('SELECT user_id FROM users WHERE user_name = ?', [params.username], function(err, rows, field) {
        var userId;

        if (err) {
          console.log('error from models messages post', err);

        } else if (rows.length === 0) {

          module.exports.users.post(params, function(err, dataPacket) {
            console.log('new data check: ', dataPacket);
            userId = dataPacket.insertId;

            db.query(queryString, [userId, params.text, params.roomname], function(err, rows, field) {
              callback(err, rows);
            });

          });
        } else {
          userId = rows[0].user_id;

          db.query(queryString, [userId, params.text, params.roomname], function(err, rows, field) {
            if (err)
              console.log('error from models messages post', err);
            callback(err, rows);
          });
        }
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