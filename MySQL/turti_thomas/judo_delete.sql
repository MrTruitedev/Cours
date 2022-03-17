use judoka;
insert into judoka (nom_judoka, prenom_judoka, age_judoka, genre_judoka, id_niveau)
values ("Lopez", "Joe", 25, "H", 4),
("Chu", "Pika", 12, "F", 5);

delete from judoka
where id_judoka = 11 and id_judoka = 12;
