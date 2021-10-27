<h3>Modelo do banco de dados</h3>
<img src="https://github.com/marcusrodriguesdev/trybe-exercises/blob/main/Back-end/bloco-21-normalizacao-e-modelagem-de-banco-de-dados/Images/exercise1.png" alt="banco de dados" />

```
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

CREATE TABLE Localizacao(
	localizacao_id INT PRIMARY KEY auto_increment,
    address VARCHAR(45) NOT NULL
);

CREATE TABLE Animal(
	nome VARCHAR(45) NOT NULL,
	animal_id INT PRIMARY KEY auto_increment,
    localizacao_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    specie_id INT NOT NULL,
    idade VARCHAR(45) NOT NULL,
    sexo VARCHAR(45) NOT NULL,
    FOREIGN KEY (localizacao_id) REFERENCES Localizacao (localizacao_id),
    FOREIGN KEY (cuidador_id) REFERENCES Cuidador (cuidador_id),
	FOREIGN KEY (specie_id) REFERENCES Specie (specie_id)
);

```
