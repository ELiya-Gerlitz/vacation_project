-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2023 at 02:43 PM
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
(12, 59),
(12, 60),
(12, 54),
(12, 57),
(10, 53),
(10, 54),
(10, 65),
(10, 63),
(19, 65),
(19, 61),
(19, 63),
(19, 54),
(19, 53),
(11, 53),
(11, 54),
(14, 53),
(12, 53);

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
(18, 'Eliya', 'Gerlitz', '', 'tent84e@gmail.com', '82730914fc54853971cd0651cf068cc5f7945fe69f924495be6e58a0cfe78d6b762070fc767adf7c656e0b8f241f8c9578cafbdedecfc219192ad0a86013dac5', 'Admin'),
(19, 'Panda', 'Panda', '', 'Panda@gmail.com', '2a4e586d882f89039f38ed828a4555adcee41bcd3b3216de9b45482eb8aa0d4bafa2efa488e25f35411daa7b5bacc15cf338a04c6e4f1b071b156ed704ab7d85', 'user'),
(20, 'Bear', 'Bear', '', 'Bear@gmail.com', '2f86864ff85914583ed9e87af58a30f3af8cb8bcacc6c1d7ba5d9b069a84101b1365f99782c2fb67ba26b64fe447790ce3f14ea9830249171bdca821d4ac537c', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `vacationId` int(11) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `description` varchar(700) NOT NULL,
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
(53, 'London', 'London is famous for Big Ben, Buckingham Palace, British Museum, and Tower Bridge. London is also known for its rich history, double-decker buses and  red phone booths.', '2023-07-02', '2023-08-03', '2800', '66c26c50-08cb-4581-99c8-5f038c305acf.jpg', 4),
(54, 'Jerusalem', 'Situated on a plateau in the Judaean Mountains between the Mediterranean and the Dead Sea, is one of the oldest cities in the world and is considered to be a holy city for the three major Abrahamic religions: Judaism, Christianity, and Islam. ', '2023-07-20', '2023-07-27', '1400', 'adc77c02-14ef-4c91-9c32-eedea840f059.jpg', 3),
(55, 'Palm Jmeirah', ' Built from reclaimed land in a series of artificial archipelagos, Palm Jumeirah is shaped like a palm tree when viewed from above.', '2023-07-02', '2023-07-11', '3000', '42dc719c-79fb-46ca-9afd-631c01e1c713.jpg', 3),
(56, 'India', 'The Taj Mahal (\'Crown of the Palace\') is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned by the fifth Mughal emperor, to house the tomb of his favourite wife, Mumtaz Mahal.', '2023-07-14', '2023-07-20', '1540', '5b2263d0-6017-4aa2-ae1b-10c67fab35a5.jpg', 3),
(57, 'New York', 'There\'s no other city on the planet with an energy that can compete with New York. The fast pace, the buzzing traffic, the hustle and bustle of the people, the 24-hour life, and the creative spirit make NYC one of the most vibrant places in the world.', '2023-07-02', '2023-07-19', '1200', '1443deba-a39d-4f16-985a-833e8a7ccbd5.jpg', 1),
(58, 'Venice', 'Venice Italy is so much more than just gondolas and special infrastructure, because during a visit to the city you can also admire the many palaces, many museums and other sites.', '2023-07-04', '2023-07-19', '2600', 'cc6599b7-2d62-4045-a111-0606f7ea0806.jpg', 4),
(59, 'Romania', 'It\'s home to breathtaking nature. Due to its varied landscape, Romania is the most biogeographically diverse country in the European Union. With snow-capped mountains, green hills covered in forests and vineyards', '2023-07-13', '2023-07-20', '1700', '16626648-61dd-4852-9864-21046fc444fa.jpg', 4),
(60, 'Tokyo', 'Tokyo inarguably is Japan’s most well-known city. The Tokyo Metropolis is made up of 23 Special Wards, home to upwards of 35 million people. It is also known for having the world’s busiest pedestrian crossing, known as Shibuya Scramble Crossing.', '2023-07-02', '2023-07-12', '4000', '1364801f-2def-4b04-a524-4a84077cd587.jpg', 3),
(61, 'Arizona', 'Arizona is home to some of the most stunning natural beauty in America. From the blooming saguaros down south to the crimson slot canyons up north and everywhere in between, there\'s an endless array of sights. ', '2023-07-13', '2023-07-21', '2100', '8f6454ba-4812-4994-b2e5-72984186c4cd.jpg', 2),
(62, 'Santorini', '\r\nSantorini is the busiest of the Greek Islands. It is a paradise of bars, cafes, restaurants, and more all in one place. Along with the great places to spend you days and nights, Santorini has some of the best beaches in Greece. ', '2023-07-04', '2023-07-20', '1300', 'dba2c123-8fdf-4baa-9be1-8b3a3e38b9a6.jpg', 4),
(63, 'Beijing', '‪Beijing Great Wall of China: Top Sections, How to Get There Beijing is the best destination to admire the Great Wall of China. Most famous Beijing Great Wall sections are located in its suburban areas, including the well-preserved Badaling and Mutianyu.', '2023-08-01', '2023-08-08', '4800', 'efd2f19c-ff61-41f1-9756-cfd34a7f1af1.jpg', 3),
(64, 'Arosa', 'Located in Graubünden, Switzerland, Arosa is home to an impressive selection of attractions and experiences, making it well worth a visit. Located in Grisons, Switzerland, Arosa is home to an impressive selection of attractions and experiences.', '2023-07-02', '2023-07-10', '1800', 'd3c76ab1-f0fa-45da-b7d9-2be34b3b73b1.jpg', 4),
(65, 'Amazon Rainforests', 'Spectacular wildlife viewing, with the opportunity to view macaws, tourcons, spectacle bear, freshwater dolphin, howler monkeys and jaguar. Enjoy fascinating cultural interactions with indigenous tribes in the Amazon...', '2023-07-05', '2023-07-26', '1600', 'd16e8313-2c14-4318-b2d7-4076c2b151fd.jpg', 2);

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
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

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
