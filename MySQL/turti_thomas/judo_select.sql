use judoka;

select nom_judoka, prenom_judoka from judoka
where id_niveau = 4;

select id_judoka from participer
where id_cpt = 1;

select nom_judoka, prenom_judoka, age_judoka, genre_judoka
from judoka
where id_judoka in 
(
	select id_cpt
    from participer
    where id_cpt = 3
);

select nom_judoka, prenom_judoka, age_judoka, genre_judoka
from judoka
where id_niveau = 6 and age_judoka >= 19;

select nom_judoka, prenom_judoka, age_judoka, genre_judoka
from judoka
where id_niveau in 
(
	select couleur_ceinture
    from niveau
    where id_niveau = id_judoka
)
order by nom_judoka;