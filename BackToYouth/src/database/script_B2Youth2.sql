create database projetoIndividual;
use projetoIndividual;
drop table usuario;
create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
dtNasc date,
genero varchar(30),
email varchar(45),
senha varchar(12)
) auto_increment = 1;

create table quiz(
idQuiz int auto_increment,
fkUsuario int,
qtdAcertos int,
primary key (idQuiz, fkUsuario),
constraint fkUser foreign key 
(fkUsuario) references usuario(idUsuario)
);

create table feedback(
idfeedback int primary key auto_increment,
comentario varchar(600)
);


SELECT AVG(YEAR(CURDATE()) - YEAR(dtNasc) - (DATE_FORMAT(CURDATE(), '%m-%d') < DATE_FORMAT(dtNasc, '%m-%d'))) AS media_idade
FROM usuario;

SELECT (YEAR(CURDATE()) - YEAR(dtNasc) - (DATE_FORMAT(CURDATE(), '%m-%d') < DATE_FORMAT(dtNasc, '%m-%d'))) AS media_idade
FROM usuario;

select * from quiz;
drop table quiz;
select * from usuario;

INSERT INTO quiz (fkUsuario, qtdAcertos) VALUES (1,10);

desc usuario;

SELECT idUsuario, nome, email FROM usuario WHERE email = 'email' AND senha = 'senha';

select * from usuario;






create table quiz(
idQuiz int primary key auto_increment,
questoes varchar(200),
fkFeedback int) auto_increment = 10; 

-- * esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

-- insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
-- insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

GRANT ALL PRIVILEGES ON projetoBack2Youth.* TO 'azulie'@'%';
FLUSH PRIVILEGES;