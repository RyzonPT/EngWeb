DROP TRIGGER IF EXISTS onPedestreChange;
delimiter $$
CREATE TRIGGER onPedestreChange 
AFTER UPDATE ON Pedestre
FOR EACH ROW 
BEGIN
		DECLARE idPass int;
        DECLARE distancia double;
	declare done int DEFAULT FALSE; 
	DECLARE cur CURSOR FOR (select p.oid as id, ST_Distance_Sphere(
			point(p.latitude, p.longitude),
			point(new.latitude, new.longitude)
		) as dist from passadeira as p
		where ST_Distance_Sphere(point(p.latitude, p.longitude), point(new.latitude, new.longitude)) <= 50);

	declare continue handler for not found set done = true;
    
    open cur;
    readloop: loop
    fetch cur into idPass, distancia;
	 if done then leave readloop;
		end if;
			INSERT INTO `spws`.`historico_pedestre`
			(`data`,
            `distancia`,
			`pedestre_oid`,
			`passadeira_oid`)
			VALUES
			(
			now(),
			distancia,
			new.oid,
			idPass);  
	END LOOP;
    CLOSE cur;
END$$

delimiter ;

DROP TRIGGER IF EXISTS onPedestreInsert;
delimiter $$
CREATE TRIGGER onPedestreInsert 
AFTER INSERT ON Pedestre
FOR EACH ROW 
BEGIN
		DECLARE idPass int;
        DECLARE distancia double;
	declare done int DEFAULT FALSE; 
	DECLARE cur CURSOR FOR (select p.oid as id, ST_Distance_Sphere(
			point(p.latitude, p.longitude),
			point(new.latitude, new.longitude)
		) as dist from passadeira as p
		where ST_Distance_Sphere(point(p.latitude, p.longitude), point(new.latitude, new.longitude)) <= 50);

	declare continue handler for not found set done = true;
    
    open cur;
    readloop: loop
    fetch cur into idPass, distancia;
	 if done then leave readloop;
		end if;
			INSERT INTO `spws`.`historico_pedestre`
			(`data`,
            `distancia`,
			`pedestre_oid`,
			`passadeira_oid`)
			VALUES
			(
			now(),
			distancia,
			new.oid,
			idPass);  
	END LOOP;
    CLOSE cur;
END$$

delimiter ;







DROP TRIGGER IF EXISTS onVeiculoChange;
delimiter $$
CREATE TRIGGER onVeiculoChange 
AFTER UPDATE ON veiculo
FOR EACH ROW 
BEGIN
		DECLARE idPass int;
        DECLARE distancia double;
	declare done int DEFAULT FALSE; 
	DECLARE cur CURSOR FOR (select p.oid as id, ST_Distance_Sphere(
			point(p.latitude, p.longitude),
			point(new.latitude, new.longitude)
		) as dist from passadeira as p
		where ST_Distance_Sphere(point(p.latitude, p.longitude), point(new.latitude, new.longitude)) <= 50);

	declare continue handler for not found set done = true;
    
    open cur;
    readloop: loop
    fetch cur into idPass, distancia;
	 if done then leave readloop;
		end if;
			INSERT INTO `spws`.`historico_veiculos`
			(`data`,
            `distancia`,
			`veiculo_oid`,
			`passadeira_oid`)
			VALUES
			(
			now(),
			distancia,
			new.oid,
			idPass);  
	END LOOP;
    CLOSE cur;
END$$

delimiter ;

DROP TRIGGER IF EXISTS onVeiculoInsert;
delimiter $$
CREATE TRIGGER onVeiculoInsert 
AFTER INSERT ON veiculo
FOR EACH ROW 
BEGIN
		DECLARE idPass int;
        DECLARE distancia double;
	declare done int DEFAULT FALSE; 
	DECLARE cur CURSOR FOR (select p.oid as id, ST_Distance_Sphere(
			point(p.latitude, p.longitude),
			point(new.latitude, new.longitude)
		) as dist from passadeira as p
		where ST_Distance_Sphere(point(p.latitude, p.longitude), point(new.latitude, new.longitude)) <= 50);

	declare continue handler for not found set done = true;
    
    open cur;
    readloop: loop
    fetch cur into idPass, distancia;
	 if done then leave readloop;
		end if;
			INSERT INTO `spws`.`historico_veiculos`
			(`data`,
            `distancia`,
			`veiculo_oid`,
			`passadeira_oid`)
			VALUES
			(
			now(),
			distancia,
			new.oid,
			idPass);  
	END LOOP;
    CLOSE cur;
END$$

delimiter ;





select pes.oid,  ST_Distance_Sphere(
			point(p.latitude, p.longitude),
			point(pes.latitude, pes.longitude)
		) as distancia from passadeira as p
		Inner Join 
		pedestre pes
		on ST_Distance_Sphere(point(p.latitude, p.longitude), point(pes.latitude, pes.longitude)) <= 50 and p.oid in (1);



select v.oid,  ST_Distance_Sphere(
			point(p.latitude, p.longitude),
			point(v.latitude, v.longitude)
		) as distancia from passadeira as p
		Inner Join 
		veiculo v
		on ST_Distance_Sphere(point(p.latitude, p.longitude), point(v.latitude, v.longitude)) <= 50 and p.oid in (1);
        
        
        
select COUNT(pes.oid) from passadeira as p
		Inner Join 
		pedestre pes
		on ST_Distance_Sphere(point(p.latitude, p.longitude), point(pes.latitude, pes.longitude)) <= 50 and p.oid in (1);



select COUNT(v.oid) from passadeira as p
		Inner Join 
		veiculo v
		on ST_Distance_Sphere(point(p.latitude, p.longitude), point(v.latitude, v.longitude)) <= 50 and p.oid in (1);
