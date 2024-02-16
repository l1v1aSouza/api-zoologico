CREATE TABLE reptil (id SERIAL NOT NULL PRIMARY KEY, 
					 nome VARCHAR(50) NOT NULL,
					 idade INT,
					 genero VARCHAR(12) NOT NULL,
					 tipo_de_escamas VARCHAR(50));
					 
CREATE TABLE ave(id SERIAL NOT NULL PRIMARY KEY,
					nome VARCHAR(50) NOT NULL,
					idade INT,
					genero VARCHAR(12) NOT NULL,
					envergadura FLOAT);
					
CREATE TABLE mamifero (id SERIAL NOT NULL PRIMARY KEY,
						nome VARCHAR(50) NOT NULL,
						idade INT,
						genero VARCHAR(12) NOT NULL,
						raca VARCHAR(30));

INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
VALUES
('Pascal', 4, 'Macho', 'Esacams dérmicas'),
('Crush', 50, 'Macho', 'escudos'),
('Kaa', 8, 'Fêmea', 'Escamas quilíferas');

INSERT INTO ave (nome, idade, genero, envergadura)
VALUES
('Zazu', 3 ,'Fêmea', 20),
('Iago', 5 ,'Macho', 30),
('Scuttle', 2, 'Macho', 40);

INSERT INTO mamifero (nome, idade, genero, raca)
VALUES
('Simba', 2, 'Macho', 'Leão'),
('Timão', 1, 'Macho', 'Suricato'),
('Pumba', 10, 'Macho', 'Javali'),
('Nala', 3, 'Fêmea', 'Leoa');

--SELECT * FROM mamifero;
--SELECT * FROM reptil;
--SELECT * FROM ave;