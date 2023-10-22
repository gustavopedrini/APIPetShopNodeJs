-- APAGAR NO PRODUTO FINAL, PRA NINGUÉM VER O BANCO --

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
    valor DECIMAL(10,2) NOT NULL,
    concluido BOOLEAN NOT NULL,
    cachorro_id INT NOT NULL 
); 

CREATE TABLE usuarios (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY, 
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    nivel_permissao INT NOT NULL
); 

ALTER TABLE cachorros
ADD FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id);

ALTER TABLE atendimentos 
ADD FOREIGN KEY (cachorro_id) REFERENCES cachorros(cachorro_id);

ALTER TABLE clientes 
ADD FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id);

INSERT INTO usuarios (email, senha, nivel_permissao)
VALUES ('admin@gmail.com', '$2a$12$THi.ud68ZvwZVx0wVjltgOyECDcIQO2BJmXwusNRQ994aYq8QLkwK', '0'), -- SENHA: admin
('atendente@gmail.com', '$2a$12$G0A..XlGHSYZAvl551DqX.OtHqYUVlvcN847rRA0dFPcULqmQCcBK', '2'), -- SENHA: atendente
('usuario@gmail.com', '$2a$12$hy3VzZDzju9zyXE22Pt2wuySYUZer2Ye6vkS8jj3aL8cU3gXf./VS', '1'); -- SENHA: usuario

INSERT INTO clientes (cliente_id, nome, telefone, usuario_id)
VALUES ('3', 'Usuário da Silva', '(46) 92255-5252', '3');

INSERT INTO cachorros (nome, cliente_id)
VALUES ('Camarelo', 3),
('Sabixo', 3);