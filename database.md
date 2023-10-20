CREATE DATABASE petshop;

CREATE TABLE clientes (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL UNIQUE,
    usuario_id INT NOT NULL
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

CREATE TABLE usuarios (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY, 
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    nivel_permissao INT NOT NULL DEFAULT '1'
); 

ALTER TABLE cachorros
ADD FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id);

ALTER TABLE atendimentos 
ADD FOREIGN KEY (cachorro_id) REFERENCES cachorros(cachorro_id);

ALTER TABLE clientes 
ADD FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id);

INSERT INTO usuarios (email, senha)
VALUES ('joao@gmail.com', '$2a$12$WZhH60xi.Yat23bZx68gFu68Zn5NTThglsaK1xmlW0YK2XE493mVG'),
('gustavo@gmail.com', '$2a$12$CLNvKBYToL4FNcqlGMyKReprOPWk1o5IygShs0cvUvtjY9ZH/GfSC');

INSERT INTO clientes (nome, telefone, usuario_id)
VALUES ('João da Silva', '(46) 92255-5252', '1'),
('Gustavo Pedrini', '(47) 98455-2969', '2');

INSERT INTO cachorros (nome, cliente_id)
VALUES ('Camarelo', 1),
('Sabixo', 1),
('Cavalo', 2);