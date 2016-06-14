-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Loomise aeg: Juuni 14, 2016 kell 12:51 p.k.
-- Serveri versioon: 5.7.9
-- PHP versioon: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Andmebaas: `guess_number`
--

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `input_log`
--

DROP TABLE IF EXISTS `input_log`;
CREATE TABLE IF NOT EXISTS `input_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `input` int(11) NOT NULL,
  `min` int(11) NOT NULL,
  `max` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Andmete tõmmistamine tabelile `input_log`
--

INSERT INTO `input_log` (`id`, `input`, `min`, `max`, `timestamp`) VALUES
(5, 23, 35, 115, '2016-06-14 12:43:30'),
(6, 114, 71, 93, '2016-06-14 12:43:35');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
