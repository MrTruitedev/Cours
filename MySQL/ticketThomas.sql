use ticket_caisse;

insert into article(name_article, prix_article) values ("baguette", 0.90);

insert into article(name_article) values ("baguette"), ("baguette"), ("baguette");
insert into article(prix_article) values (0.90);
insert into article(name_article, prix_article) values 
("pain", 1.90),
("croissant", 0.45),
("suisse", 1.20),
("bagnat", 4.50);

insert into vendeur(name_vendeur, first_name_vendeur) values
("Huitre", "Jean"),
("Mouette", "Eric");

insert into ticket(date_ticket) values
('2022-03-02'),
('2022-02-02'),
('2022-01-02');

INSERT into ajouter(id_ticket, id_article, qtx) values
(1,1,10),
(2,2,3),
(3,4,5),
(1,3,2);

update vendeur
set first_name_vendeur="Richard"
where id_vendeur = 1;

insert into vendeur(name_vendeur, first_name_vendeur) values ("Moule", "Philippe");

update vendeur
set first_name_vendeur="Patrick"
where id_vendeur>=1 and id_vendeur<=2;

update article
set prix_article=2
where prix_article >=1;

select * from ajouter;
select * from article;
select * from ticket;
select * from vendeur;
select name_vendeur from vendeur;
select name_article, prix_article from article;
select date_ticket from ticket;
select name_article, prix_article from article where prix_article > 1;
alter table ticket
add constraint fk_vendre_vendeur
foreign key (num_caisse_ticket)
references vendeur(id_vendeur);
