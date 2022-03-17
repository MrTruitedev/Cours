create database planning_scolaire;
use planning_scolaire;

create table eleve
(
	id_eleve int primary key auto_increment not null,
    nom_eleve varchar(50),
    prenom_eleve varchar(50),
    id_classe int
)engine=InnoDB;

create table classe
(
	id_classe int primary key auto_increment not null,
    nom_classe varchar(50)
)engine=InnoDB;

create table detail
(
	id_detail int primary key auto_increment not null,
    commentaire_detail text,
    mat_oublie_detail bool,
    note_detail int,
    id_seance int,
    id_eleve int,
    id_mat int
)engine=InnoDB;

create table matiere
(
	id_mat int primary key auto_increment not null,
    nom_mat varchar(50)
)engine=InnoDB;

create table droit
(
	id_droit int primary key auto_increment not null,
    nom_droit varchar(50)
)engine=InnoDB;

create table utilisateur
(
	id_util int primary key auto_increment not null,
    nom_util varchar(50),
    prenom_util varchar(50),
    login_util varchar(50),
    mdp_util varchar(50),
    id_droit int
)engine=InnoDB;

create table type
(
	id_type int primary key auto_increment not null,
    nom_type varchar(50)
)engine=InnoDB;

create table seance
(
	id_seance int primary key auto_increment not null,
    nom_seance varchar(50),
    date_seance date,
    creneaux_horaire varchar(2),
    duree_seance int,
    id_type int,
    id_util int
)engine=InnoDB;

create table participer
(
	id_seance int,
    id_eleve int,
    presence bool
)engine=InnoDB;

alter table eleve
add constraint fk_appartenir_classe
foreign key (id_classe)
references classe(id_classe);

alter table detail
add constraint fk_noter_eleve
foreign key(id_eleve)
references eleve(id_eleve);

alter table detail
add constraint fk_completer_seance
foreign key(id_seance)
references seance(id_seance);

alter table detail
add constraint fk_travailler_matiere
foreign key (id_mat)
references matiere(id_mat);

alter table utilisateur
add constraint fk_posseder_droit
foreign key (id_droit)
references droit(id_droit);

alter table seance
add constraint fk_diriger_utilisateur
foreign key(id_util)
references utilisateur(id_util);

drop table participer;
create table participer
(
	id_seance int,
    id_eleve int,
    presence bool,
    primary key(id_seance, id_eleve)
)engine=InnoDB;

alter table participer
add constraint fk_participer_eleve
foreign key (id_eleve)
references eleve(id_eleve);

alter table participer
add constraint fk_participer_seance
foreign key(id_seance)
references seance(id_seance);