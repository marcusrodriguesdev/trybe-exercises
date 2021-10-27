CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE funcionario(
	funcionario_id INT PRIMARY KEY auto_increment,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    contato VARCHAR(45) NOT NULL,
    numero VARCHAR(45) NOT NULL,
    `data` VARCHAR (45) NOT NULL
);

CREATE TABLE setor(
	setor_id INT PRIMARY KEY auto_increment,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE setor_funcionario(
	setor_id INT NOT NULL,
    funcionario_id INT NOT NULL,
    FOREIGN KEY (setor_id) REFERENCES setor (setor_id),
    FOREIGN KEY (funcionario_id) REFERENCES funcionario (funcionario_id)
);