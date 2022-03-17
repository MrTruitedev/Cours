
use blog;

create table utilisateur
(
	id_util int primary key auto_increment not null,
    nom_util varchar(50),
    prenom_util varchar(50),
    login_util varchar(100),
    id_role int
)engine=InnoDB;

create table role
(
	id_role int primary key auto_increment not null,
    nom_role varchar(50)
)engine=InnoDB;

create table utilisateur
(
	id_util int primary key auto_increment not null,
    nom_util varchar(50),
    prenom_util varchar(50),
    login_util varchar(100),
    id_role int
)engine=InnoDB;

create table commentaire
(
	id_com int primary key auto_increment not null,
    contenu_com varchar(50),
    date_com date,
    id_util int(100),
    id_article int
)engine=InnoDB;

CREATE TABLE image (
    id_image INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_image VARCHAR(50),
    url_image VARCHAR(50)
)  ENGINE=INNODB;

create table categories
(
	id_cat int primary key auto_increment not null,
    nom_cat varchar(50)
)engine=InnoDB;

create table article
(
	id_article int primary key auto_increment not null,
    nom_article varchar(50),
    contenu_article varchar(50),
    date_article date,
    id_util int,
    id_cat int
)engine=InnoDB;

create table ajouter
(
	id_image int,
    id_article int,
    primary key(id_article, id_image)
)engine=InnoDB;

alter table utilisateur
add constraint fk_posseder_role
foreign key (id_role)
references role(id_role);

alter table commentaire
add constraint fk_commenter_utilisateur
foreign key (id_util)
references utilisateur(id_util);

alter table commentaire
add constraint fk_completer_article
foreign key (id_article)
references article(id_article);

alter table ajouter
add constraint fk_ajouter_article
foreign key (id_article)
references article(id_article);

alter table ajouter
add constraint fk_ajouter_image
foreign key (id_image)
references image(id_image);

alter table article
add constraint fk_filtrer_categorie
foreign key (id_cat)
references categories(id_cat);

alter table article
add constraint fk_rediger_utilisateur
foreign key (id_util)
references utilisateur(id_util);


