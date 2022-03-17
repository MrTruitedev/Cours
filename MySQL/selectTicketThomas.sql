select name_vendeur from vendeur;
select name_article, prix_article from article;
select date_ticket from ticket;
select name_article, prix_article from article where prix_article > 1;

select name_vendeur from vendeur where (select num_caisse_ticket from ticket where id_ticket =3);
select num_caisse_ticket as id_vendeur from ticket;
select vendeur.name_vendeur from ticket inner join vendeur where ticket.num_caisse_ticket = vendeur.id_vendeur and ticket.id_ticket=1;