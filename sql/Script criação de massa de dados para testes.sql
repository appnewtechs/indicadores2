-- insert into usuario (login,nome,email,senha,dt_cadastro) VALUES ('andreas','Andreas Werthm?ller','andreas.werthmuller@newtechs.com.br','testando',NOW());
-- select * from usuario

-- insert into grupo (descricao,dt_cadastro) values ('Analistas Newtechs',NOW());
-- select * from grupo

-- select * from movimento limit 10
-- 
-- insert into loja (id_grupo, descricao, cnpj, matriz, inicio_expediente, final_expediente, dt_cadastro)
-- values (1,'Loja da newtechs 1', '44189389000130',1,6,22,NOW())

-- select * from loja

select * from usuario_grupo;
-- insert into usuario_grupo (id_grupo,id_usuario) values (1,9)



       select DISTINCT a.descricao as loja   
       from loja a
       INNER JOIN grupo b
         on b.id_grupo=a.id_grupo
       INNER JOIN usuario_grupo c
         on c.id_grupo=b.id_grupo
       INNER JOIN usuario d
         on d.id_usuario=c.id_usuario  
       WHERE d.login='andreas'
       ORDER BY a.descricao ASC;