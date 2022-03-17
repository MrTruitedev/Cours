create database judoka;

use judoka;

create table judoka
(	
	id_judoka int auto_increment primary key not null,
    nom_judoka varchar(50),
    prenom_judoka varchar(50),
    age_judoka int,
    genre_judoka varchar (5),
    id_niveau int
)engine=InnoDB;

create table participer
(
	id_cpt int,
	id_judoka int
)engine=InnoDB;

create table competition
(
	id_cpt int auto_increment primary key not null,
    nom_cpt varchar(50),
    date_deb_cpt date,
    date_fin_cpt date
)engine=InnoDB;

create table niveau
(
	id_niveau int primary key auto_increment not null,
    couleur_ceinture varchar(50)
)engine=InnoDB;

alter table judoka
add constraint fk_posseder_niveau
foreign key (id_niveau)
references niveau (id_niveau);

alter table participer
add constraint fk_participer_competition
foreign key (id_cpt)
references competition (id_cpt);

alter table participer
add constraint fk_participer_judoka
foreign key (id_judoka)
references judoka (id_judoka);
