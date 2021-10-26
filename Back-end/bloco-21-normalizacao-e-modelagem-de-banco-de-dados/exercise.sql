CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE Specie(
	nome VARCHAR(45) NOT NULL,
    specie_id INT PRIMARY KEY auto_increment
);

CREATE TABLE Gerente(
	nome VARCHAR(45) NOT NULL,
    gerente_id INT PRIMARY KEY auto_increment
);

CREATE TABLE Cuidador(
	nome VARCHAR(45) NOT NULL,
    cuidador_id INT PRIMARY KEY auto_increment,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES Gerente (gerente_id)
);

