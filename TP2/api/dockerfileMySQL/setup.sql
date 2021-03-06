CREATE USER 'passadeira'@'172.20.0.4' IDENTIFIED BY 'root';

ALTER USER 'passadeira'@'172.20.0.4' IDENTIFIED WITH mysql_native_password BY 'root';

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema spws-passadeira
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema spws-passadeira
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `spws-passadeira` DEFAULT CHARACTER SET utf8 ;
USE `spws-passadeira` ;

-- -----------------------------------------------------
-- Table `spws-passadeira`.`passadeira`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spws-passadeira`.`passadeira` (
  `idPassadeira` INT NOT NULL AUTO_INCREMENT,
  `latitude` DOUBLE NOT NULL,
  `longitude` DOUBLE NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPassadeira`),
  UNIQUE INDEX `idpassadeiras_UNIQUE` (`idPassadeira` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

GRANT ALL PRIVILEGES ON *.* TO 'passadeira'@'172.20.0.4' WITH GRANT OPTION;
