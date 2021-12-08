CREATE DATABASE Desafio;
USE Desafio;

CREATE TABLE Messages (
  id int(5) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(200) NOT NULL,
  email varchar(200) NOT NULL,
  message varchar(500) NOT NULL,
  createdAt date NOT NULL,
  updatedAt date NOT NULL,
  PRIMARY KEY (id)
);
