CREATE DATABASE currentProject;


-- set extention

-- before you should:
-- connect to database \c
-- create extension if not exists "uuid-ossp";  // for uuid of postgersql
-- https://www.xtuple.com/knowledge/how-do-i-install-uuid-ossp // link how to install extension for uuid of postgersql

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL  
);

-- insert fake user
INSERT INTO users(user_name, user_email, user_password) VALUES
("Vitali", "v.santalau@gmail.com", "1");