CREATE DATABASE shortly;



CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE sessions(
id SERIAL PRIMARY KEY,
token TEXT NOT NULL,
user_id INTEGER NOT NULL REFERENCES users(id));