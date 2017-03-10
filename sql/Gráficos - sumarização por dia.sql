INSERT INTO top5VendedorDia (qtde,nomeUsuarioVenda)
select count(1) qtde,nomeUsuarioVenda
from movimento
where day(dataVenda)=day(SYSDATE()) 
group by nomeUsuarioVenda
order by qtde desc
LIMIT 5;

insert into top5GruposDia (qtde,descricaoGrupo)
select count(1) qtde,descricaoGrupo
from movimento
where day(dataVenda)=day(SYSDATE()) 
group by descricaoGrupo
order by qtde desc
LIMIT 5;

INSERT INTO top5ProdutosMes (qtde,descricaoProduto)
select count(1) qtde,descricaoProduto
from movimento
where day(dataVenda)=day(SYSDATE()) 
group by descricaoProduto
order by qtde desc
LIMIT 5











