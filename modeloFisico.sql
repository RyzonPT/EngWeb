-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema SPWS-passadeira
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema SPWS-passadeira
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `SPWS-passadeira` DEFAULT CHARACTER SET utf8 ;
USE `SPWS-passadeira` ;

-- -----------------------------------------------------
-- Table `SPWS-passadeira`.`passadeira`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SPWS-passadeira`.`passadeira` (
  `idPassadeira` INT NOT NULL AUTO_INCREMENT,
  `latitude` DOUBLE NOT NULL,
  `longitude` DOUBLE NOT NULL,
  PRIMARY KEY (`idPassadeira`),
  UNIQUE INDEX `idpassadeiras_UNIQUE` (`idPassadeira` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pedestre
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pedestre
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pedestre` DEFAULT CHARACTER SET utf8 ;
USE `pedestre` ;

-- -----------------------------------------------------
-- Table `pedestre`.`pedestre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pedestre`.`pedestre` (
  `idPedestre` INT NOT NULL AUTO_INCREMENT,
  `latitude` DOUBLE NOT NULL,
  `longitude` DOUBLE NOT NULL,
  PRIMARY KEY (`idPedestre`),
  UNIQUE INDEX `idpassadeiras_UNIQUE` (`idPedestre` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema veiculos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema veiculos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `veiculos` DEFAULT CHARACTER SET utf8 ;
USE `veiculos` ;

-- -----------------------------------------------------
-- Table `veiculos`.`veiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `veiculos`.`veiculo` (
  `idVeiculo` INT NOT NULL AUTO_INCREMENT,
  `latitude` DOUBLE NOT NULL,
  `longitude` DOUBLE NOT NULL,
  PRIMARY KEY (`idVeiculo`),
  UNIQUE INDEX `idpassadeiras_UNIQUE` (`idVeiculo` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

