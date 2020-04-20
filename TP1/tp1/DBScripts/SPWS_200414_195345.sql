-- Group [Group]
create table `group` (
   `oid`  integer  not null,
   `groupname`  varchar(255),
  primary key (`oid`)
) ENGINE=InnoDB;


-- Module [Module]
create table `module` (
   `oid`  integer  not null,
   `moduleid`  varchar(255),
   `modulename`  varchar(255),
  primary key (`oid`)
) ENGINE=InnoDB;


-- User [User]
create table `user` (
   `oid`  integer  not null,
   `username`  varchar(255),
   `password`  varchar(255),
   `email`  varchar(255),
  primary key (`oid`)
) ENGINE=InnoDB;


-- Pedestre [ent1]
create table `pedestre` (
   `oid`  integer  not null,
   `latitude`  double precision,
   `longitude`  double precision,
  primary key (`oid`)
) ENGINE=InnoDB;


-- Passadeira [ent2]
create table `passadeira` (
   `oid`  integer  not null,
   `latitude`  double precision,
   `longitude`  double precision,
   `nrpedestres`  integer,
   `nrveiculos`  integer,
   `estado`  varchar(255),
  primary key (`oid`)
) ENGINE=InnoDB;


-- Veiculo [ent3]
create table `veiculo` (
   `oid`  integer  not null,
   `latitude`  double precision,
   `longitude`  double precision,
  primary key (`oid`)
) ENGINE=InnoDB;


-- Historico_Pedestre [ent4]
create table `historico_pedestre` (
   `oid`  integer  not null auto_increment,
   `data`  datetime,
   `distancia`  double precision,
  primary key (`oid`)
) ENGINE=InnoDB;


-- Historico_Veiculos [ent5]
create table `historico_veiculos` (
   `oid`  integer  not null auto_increment,
   `data`  datetime,
   `distancia`  double precision,
  primary key (`oid`)
) ENGINE=InnoDB;


-- Group_DefaultModule [Group2DefaultModule_DefaultModule2Group]
alter table `group`  add column  `module_oid`  integer;
alter table `group`   add index fk_group_module (`module_oid`), add constraint fk_group_module foreign key (`module_oid`) references `module` (`oid`);


-- Group_Module [Group2Module_Module2Group]
create table `group_module` (
   `group_oid`  integer not null,
   `module_oid`  integer not null,
  primary key (`group_oid`, `module_oid`)
) ENGINE=InnoDB;
alter table `group_module`   add index fk_group_module_group (`group_oid`), add constraint fk_group_module_group foreign key (`group_oid`) references `group` (`oid`);
alter table `group_module`   add index fk_group_module_module (`module_oid`), add constraint fk_group_module_module foreign key (`module_oid`) references `module` (`oid`);


-- User_DefaultGroup [User2DefaultGroup_DefaultGroup2User]
alter table `user`  add column  `group_oid`  integer;
alter table `user`   add index fk_user_group (`group_oid`), add constraint fk_user_group foreign key (`group_oid`) references `group` (`oid`);


-- User_Group [User2Group_Group2User]
create table `user_group` (
   `user_oid`  integer not null,
   `group_oid`  integer not null,
  primary key (`user_oid`, `group_oid`)
) ENGINE=InnoDB;
alter table `user_group`   add index fk_user_group_user (`user_oid`), add constraint fk_user_group_user foreign key (`user_oid`) references `user` (`oid`);
alter table `user_group`   add index fk_user_group_group (`group_oid`), add constraint fk_user_group_group foreign key (`group_oid`) references `group` (`oid`);


-- Pedestre_Historico_Pedestre [rel10]
alter table `historico_pedestre`  add column  `pedestre_oid`  integer;
alter table `historico_pedestre`   add index fk_historico_pedestre_pedestre (`pedestre_oid`), add constraint fk_historico_pedestre_pedestre foreign key (`pedestre_oid`) references `pedestre` (`oid`);


-- Historico_Pedestre_Passadeira [rel11]
alter table `historico_pedestre`  add column  `passadeira_oid`  integer;
alter table `historico_pedestre`   add index fk_historico_pedestre_passadei (`passadeira_oid`), add constraint fk_historico_pedestre_passadei foreign key (`passadeira_oid`) references `passadeira` (`oid`);


-- Historico_Veiculos_Passadeira [rel12]
alter table `historico_veiculos`  add column  `passadeira_oid`  integer;
alter table `historico_veiculos`   add index fk_historico_veiculos_passadei (`passadeira_oid`), add constraint fk_historico_veiculos_passadei foreign key (`passadeira_oid`) references `passadeira` (`oid`);


-- Historico_Veiculos_Veiculo [rel13]
alter table `historico_veiculos`  add column  `veiculo_oid`  integer;
alter table `historico_veiculos`   add index fk_historico_veiculos_veiculo (`veiculo_oid`), add constraint fk_historico_veiculos_veiculo foreign key (`veiculo_oid`) references `veiculo` (`oid`);


-- User_Pedestre [rel3]
alter table `pedestre`  add column  `user_oid`  integer;
alter table `pedestre`   add index fk_pedestre_user (`user_oid`), add constraint fk_pedestre_user foreign key (`user_oid`) references `user` (`oid`);


-- User_Veiculo [rel4]
alter table `veiculo`  add column  `user_oid`  integer;
alter table `veiculo`   add index fk_veiculo_user (`user_oid`), add constraint fk_veiculo_user foreign key (`user_oid`) references `user` (`oid`);


