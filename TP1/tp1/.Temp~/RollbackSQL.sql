-- User_Group [User2Group_Group2User]
alter table `user_group`   drop foreign key `fk_user_group_group`;
alter table `user_group`   drop foreign key `fk_user_group_user`;
drop table `user_group`;
-- User_DefaultGroup [User2DefaultGroup_DefaultGroup2User]
alter table `user`   drop foreign key `fk_user_group`;
alter table `user`  drop column  `group_oid`;
-- Group_Module [Group2Module_Module2Group]
alter table `group_module`   drop foreign key `fk_group_module_module`;
alter table `group_module`   drop foreign key `fk_group_module_group`;
drop table `group_module`;
-- Group_DefaultModule [Group2DefaultModule_DefaultModule2Group]
alter table `group`   drop foreign key `fk_group_module`;
alter table `group`  drop column  `module_oid`;
-- Historico_Veiculos [ent5]
drop table `historico_veiculos`;
-- Historico_Pedestre [ent4]
drop table `historico_pedestre`;
-- Veiculo [ent3]
drop table `veiculo`;
-- Passadeira [ent2]
drop table `passadeira`;
-- Pedestre [ent1]
drop table `pedestre`;
-- User [User]
drop table `user`;
-- Module [Module]
drop table `module`;
-- Group [Group]
drop table `group`;
