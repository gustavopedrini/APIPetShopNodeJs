CREATE DATABASE petshop;

CREATE TABLE clientes (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE cachorros (
    cachorro_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cliente_id int NOT NULL
);

CREATE TABLE atendimentos (
    atendimento_id INT AUTO_INCREMENT PRIMARY KEY, 
    data DATE NOT NULL, 
    hora TIME NOT NULL, 
    concluido BOOLEAN NOT NULL,
    cachorro_id INT NOT NULL 
); 

ALTER TABLE cachorros
ADD FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id);

ALTER TABLE atendimentos 
ADD FOREIGN KEY (cachorro_id) REFERENCES cachorros(cachorro_id);

INSERT INTO clientes (nome, telefone)
VALUES ('João da Silva', '(46) 92255-5252'),
('Gustavo Pedrini', '(47) 98455-2969');

INSERT INTO cachorros (nome, cliente_id)
VALUES ('Camarelo', 1),
('Sabixo', 1),
('Cavalo', 2);