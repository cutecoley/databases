CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  /* Describe your table here.*/
  room_id INT AUTO_INCREMENT,
  room_name VARCHAR(26),
  PRIMARY KEY (room_id)
);

CREATE TABLE users (
  /* Describe your table here.*/
  user_id INT AUTO_INCREMENT,
  user_name VARCHAR(26),
  PRIMARY KEY (user_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  text VARCHAR(26),
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (user_id),
  FOREIGN KEY (room_id) REFERENCES rooms (room_id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

