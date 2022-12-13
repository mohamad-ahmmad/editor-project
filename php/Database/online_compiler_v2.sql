-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2022 at 07:46 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_compiler`
--

-- --------------------------------------------------------

--
-- Table structure for table `codes`
--

CREATE TABLE `codes` (
  `ID` int(11) NOT NULL,
  `project_bio` varchar(255) DEFAULT NULL,
  `extention` varchar(10) NOT NULL,
  `code` mediumtext NOT NULL,
  `user_email` varchar(30) NOT NULL,
  `proj_name` varchar(30) NOT NULL,
  `creation_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `codes`
--

INSERT INTO `codes` (`ID`, `project_bio`, `extention`, `code`, `user_email`, `proj_name`, `creation_date`) VALUES
(1, 'ad', 'js', 'a = int(input(\"Enter a: \"))\r\nb = int(input(\"Enter b: \"))\r\n\r\ntry:\r\n    division = a / b\r\n    print(division)\r\nexcept ZeroDivisionError: # specify the type\r\n    print(\"Please enter valid values.\")', 'bdair@web.com', 'ad', NULL),
(2, 'asdasdasd', 'js', '', 'bdair@web.com', 'asdasd', NULL),
(3, 'With supporting text below as a natural lead-in to\r\n                      additional content.', 'js', '', 'bdair@web.com', 'Special title treatment', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `email` varchar(30) NOT NULL,
  `Username` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`email`, `Username`, `Password`, `Type`) VALUES
('abo_Sharak@web.com', 'hacker', '7c4a8d09ca3762af61e59520943dc2', 'member'),
('bdair@web.com', 'bdair', '123456', 'member');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `codes`
--
ALTER TABLE `codes`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `User_Email` (`user_email`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `codes`
--
ALTER TABLE `codes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `codes`
--
ALTER TABLE `codes`
  ADD CONSTRAINT `codes_ibfk_1` FOREIGN KEY (`User_Email`) REFERENCES `members` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
