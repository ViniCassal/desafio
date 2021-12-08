CREATE DATABASE challenge_fullstack;

USE challenge_fullstack;

CREATE TABLE usuario(
  id INTEGER PRIMARY KEY auto_increment,
  nome VARCHAR(200),
  email VARCHAR(200),
  mensagem VARCHAR(200),
  create_at DATE,
  update_at DATE
);