-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2023 at 09:07 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacation_project`
--
CREATE DATABASE IF NOT EXISTS `vacation_project` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `vacation_project`;

-- --------------------------------------------------------

--
-- Table structure for table `continents`
--

CREATE TABLE `continents` (
  `continentId` int(11) NOT NULL,
  `continentName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `continents`
--

INSERT INTO `continents` (`continentId`, `continentName`) VALUES
(1, 'North America'),
(2, 'South America'),
(3, 'Asia'),
(4, 'Europe'),
(5, 'Africa'),
(6, 'Antarctica'),
(7, 'Australia');

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `userId` int(11) NOT NULL,
  `vacationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`userId`, `vacationId`) VALUES
(12, 43),
(12, 42),
(12, 45);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `username` varchar(55) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `username`, `email`, `password`, `role`) VALUES
(10, 'Betty', 'Boop', 'Betty', 'Betty@gmail.com', 'fa49cb98b722411d562b29156609c20392f97959d4db51306d05dadb8c98e9a7cfeb2b3c901f59da91505b5aaf28cd573af6c9b14c2aff58b5bb740f5f273c34', 'user'),
(11, 'Miriam', 'Weisz', 'MWeisz', 'miriam@gmail.com', 'fa3a82c176d92bb1416ee0ed5cc7e35b331c46b7d7aec5bf298b18b31864250ca1fb395f7867296487a3e3337997e43256ef6d77ace7ff1b5ec34291d591eceb', 'user'),
(12, 'Binyomin', 'Weisz', 'bWeisz', 'bweisz180@gmail.com', '137fafd3b68ff223200defde477518183fff349062d550c84cb21caf305a77b12fb932bd8771ecd08e0699374381c9445a6a120e856dac20e25fd6fa8edc37cd', 'user'),
(13, 'Gilly', 'Silly', '', 'Gilli@gmail.com', '3318077db0313f533e4bd22b3e4b9601040e7a727f55e2cb4c7916088f8735496aa3c734df40400975980b868e98df2e9df68e150d1d2364c9af79bc7e8e371c', 'user'),
(14, 'Barbara', 'Barbara', '', 'Barbara@gmail.com', 'e35f0059543601fb6bc5c535f6bad81ae6b4a23225b928d509796e39f34a3f1b8436cbaa33de3c5fa7e1c80b09643044b458788a0feae4e8e3619a3893ce2407', 'user'),
(15, 'BBBB', 'BBBB', '', 'BBBB@gmail.com', '97be7fe06c4b068ccc465607a878189fdfb9af6731bff408cc8364e1756d29ef85865f947264a085610a4dab96ea25e62fcebaff29e6c9cfea935fe3b65872a5', 'user'),
(17, 'Toffy', 'Toffy', '', 'Toffy@gmail.com', '7a054ba94c84fda1d131a47f8562808beda324376ae4d3cdb0da561792401a58b3cf56c246b901780643d0a18a51e82e3fd909eb2b314a3b240e86921c0bb3ae', 'Admin'),
(18, 'Eliya', 'Gerlitz', '', 'tent84e@gmail.com', '82730914fc54853971cd0651cf068cc5f7945fe69f924495be6e58a0cfe78d6b762070fc767adf7c656e0b8f241f8c9578cafbdedecfc219192ad0a86013dac5', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `vacationId` int(11) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `startingDate` date NOT NULL,
  `endingDate` date NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `imageName` varchar(250) NOT NULL,
  `continentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`vacationId`, `destination`, `description`, `startingDate`, `endingDate`, `price`, `imageName`, `continentId`) VALUES
(41, 'Wedding', 'Shidduch', '2023-06-22', '2023-06-29', '147', '6be6af0b-b9d2-4e49-8f63-584619f4fef1.jpg', 2),
(42, 'Baby Born', 'Cutie Little Baby!!', '2023-06-22', '2023-06-23', '23', '6fe65756-b6a8-4874-87b4-e89730bd76c9.jpg', 1),
(43, 'Wedding', 'Shidduch', '2023-06-21', '2023-06-22', '17', '188aa09a-3f1c-4adb-9e6c-d7eacfb7b9b2.jpg', 3),
(44, 'Destination', 'Description', '2023-06-14', '2023-06-21', '147', '7ba23668-e36c-4401-875a-f9aea84e8fe2.gif', 2),
(45, 'unstarted!   ', 'unstartedVacation!    ', '2023-06-30', '2023-07-01', '18', '7638dbd3-b5e2-4247-9afc-842e50f94315.gif', 3),
(46, 'America', 'Shidduch', '2023-06-23', '2023-06-24', '17', 'fe952dc8-c217-41e2-84ee-6fc3263af26f.gif', 4),
(47, 'America', 'Weeding', '2023-06-23', '2023-06-24', '17', '9510aa57-28de-49da-9431-8d7836b5baff.gif', 6),
(48, 'Shidduch', 'America', '2023-06-23', '2023-06-24', '147', '631eb8e9-73a8-4790-965d-c23ed6f59185.gif', 7),
(49, 'America', 'Wedding !!!', '2023-06-23', '2023-06-24', '17', 'bffed844-25b8-4339-9097-2fda98105f31.jpg', 7),
(50, 'VACATION', 'VACATION', '2023-06-23', '2023-06-24', '17', 'd0a89e79-087a-4ae3-94b7-21e13a0ab132.jpg', 6),
(51, 'America', 'Wedding', '2023-06-23', '2023-07-08', '19', '4c20269e-f39b-437c-95d3-3bccd4cfcdea.gif', 6),
(52, 'Wedding', 'America', '2023-06-30', '2023-07-07', '17', '1481cd72-1f35-49dc-9c70-07a9b10f2313.gif', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `continents`
--
ALTER TABLE `continents`
  ADD PRIMARY KEY (`continentId`);

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD KEY `userId` (`userId`),
  ADD KEY `vacationId` (`vacationId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD KEY `role` (`role`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`vacationId`),
  ADD KEY `continent` (`continentId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `continents`
--
ALTER TABLE `continents`
  MODIFY `continentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`vacationId`) REFERENCES `vacations` (`vacationId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vacations`
--
ALTER TABLE `vacations`
  ADD CONSTRAINT `vacations_ibfk_1` FOREIGN KEY (`continentId`) REFERENCES `continents` (`continentId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
