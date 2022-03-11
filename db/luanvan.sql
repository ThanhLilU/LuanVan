-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2022 at 12:25 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `luanvan`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `Time` date NOT NULL,
  `Content` varchar(500) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `GameID` int(11) NOT NULL,
  `GameName` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gamescore`
--

CREATE TABLE `gamescore` (
  `ID` int(11) NOT NULL,
  `GameID` int(11) NOT NULL,
  `UserName` int(11) NOT NULL,
  `Score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `TopicID` int(11) NOT NULL,
  `TopicName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `CategoryID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Content` mediumtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `AskedDate` date NOT NULL,
  `Viewed` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`TopicID`, `TopicName`, `CategoryID`, `UserID`, `Content`, `AskedDate`, `Viewed`) VALUES
(11, 'Bạn đã thực sự hiểu bản chất của \"Hằng đẳng thức\"?', 1, 1, 'Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con', '2022-03-01', 12),
(12, 'Cách tính tổng n số nguyên tăng dần', 2, 1, 'Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con', '0000-00-00', 0),
(13, 'Cách tính ma trận 2x2', 3, 1, 'Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con', '0000-00-00', 0),
(14, 'Chaos Game, vẻ đẹp của con số và sự ngẫu nhiên', 4, 1, 'Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con', '0000-00-00', 0),
(15, 'Cách tính số PI bằng công thức Leibniz', 5, 1, 'Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con', '0000-00-00', 0),
(16, 'Cách tính số PI dựa vào số lần chạm của 2 vật', 5, 2, 'Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con', '0000-00-00', 0),
(18, 'asdasd', 1, 1, 'asdgfnvcvb<br>xcvbwertbn<br>sfghm', '2022-03-03', 0),
(19, 'Làm sao để hiểu được các bất đẳng thức cơ bản?', 2, 1, 'Tình hình là hiện nay mình có gặp 1 số bài toán yêu cầu phải dùng các bất đẳng thức cơ bản cụ thể là bất đẳng thức côsi, nhưng mà giáo trình của cô giáo trên lớp thì quá khó hiểu.<br>Kính mong các anh/chị đi trước có thể giải thích cho e với ạ, e đang hoang mang quá.<br>E cảm ơn mọi người rất nhiều ạ.', '2022-03-03', 0),
(20, 'Pi là số gì và vì sao người ta lại phát minh ra số Pi', 5, 1, 'Em đang bắt đầu học cấp 2 và hôm nay có bài về số Pi</p> <p>Nhưng cô giáo của em chỉ dạy là Pi = 3.14..</p> <p>Vậy thì số Pi đến từ đâu, sao người ta lại biết bằng 3.14?</p> <p>Mong nhận được câu trả lời từ các anh chị, em xin cảm ơn ạ', '2022-03-04', 0),
(21, 'Làm sao để nhân 2 ma trận cấp 2 với nhau?', 3, 4, 'Hôm nay mình tình cờ có gặp 1 dạng bài toán nhân ma trận đơn giản cụ thể là 2x2</p> <p>Nhưng lời giải khó hiểu quá không biết có a/c nào có kiến thức về chuyện nhân ma trận có thể chỉ giúp em công thức được không ạ?</p> <p>Em xin cảm ơn rất nhiều', '2022-03-09', 0),
(22, 'sdhgmfhj', 1, 4, 'sadfbn</p> <p>sgfndhmgfd</p> <p>sgnsdrtghb', '2022-03-09', 0);

-- --------------------------------------------------------

--
-- Table structure for table `topic_category`
--

CREATE TABLE `topic_category` (
  `CategoryID` int(11) NOT NULL,
  `CategoryName` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `topic_category`
--

INSERT INTO `topic_category` (`CategoryID`, `CategoryName`) VALUES
(1, 'Hình học'),
(2, 'Đại số'),
(3, 'Toán cao cấp'),
(4, 'Sự kỳ diệu của con số'),
(5, 'PI và những điều chưa biết');

-- --------------------------------------------------------

--
-- Table structure for table `topic_comment`
--

CREATE TABLE `topic_comment` (
  `CommentID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `TopicID` int(11) NOT NULL,
  `Comment` mediumtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `topic_comment`
--

INSERT INTO `topic_comment` (`CommentID`, `UserID`, `TopicID`, `Comment`) VALUES
(2, 2, 14, 'alo alo'),
(3, 2, 11, '1234'),
(4, 1, 11, 'alo <br><br> aloooooo<br> alo'),
(8, 1, 11, 'Bài viết rất hay<br>Mình luôn ủng hộ bạn'),
(10, 4, 18, 'mày xàm lồn~</p> <p>Điêu toa');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `UserType` int(11) NOT NULL DEFAULT 2,
  `UserName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `RealName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `UserPassword` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `UserType`, `UserName`, `RealName`, `UserPassword`) VALUES
(1, 1, 'NguyenDinhThanh', 'Nguyễn Đình Thanh', 'LuanVan@123'),
(2, 2, 'Thanh', 'Nguyễn Thanh', 'thanh123'),
(4, 2, 'B1805813', 'Nguyễn Đình Than', 'B1805813');

-- --------------------------------------------------------

--
-- Table structure for table `user_like_comment`
--

CREATE TABLE `user_like_comment` (
  `UserID` int(11) NOT NULL,
  `CommentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_like_comment`
--

INSERT INTO `user_like_comment` (`UserID`, `CommentID`) VALUES
(1, 2),
(1, 3),
(1, 4),
(4, 8);

-- --------------------------------------------------------

--
-- Table structure for table `user_like_topic`
--

CREATE TABLE `user_like_topic` (
  `UserID` int(11) NOT NULL,
  `TopicID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_like_topic`
--

INSERT INTO `user_like_topic` (`UserID`, `TopicID`) VALUES
(4, 18);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`GameID`);

--
-- Indexes for table `gamescore`
--
ALTER TABLE `gamescore`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `GameID` (`GameID`);

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`TopicID`),
  ADD UNIQUE KEY `TopicName` (`TopicName`),
  ADD KEY `CategoryID` (`CategoryID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `topic_category`
--
ALTER TABLE `topic_category`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indexes for table `topic_comment`
--
ALTER TABLE `topic_comment`
  ADD PRIMARY KEY (`CommentID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `TopicID` (`TopicID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `UserName` (`UserName`);

--
-- Indexes for table `user_like_comment`
--
ALTER TABLE `user_like_comment`
  ADD KEY `user_like_comment_ibfk_1` (`UserID`),
  ADD KEY `user_like_comment_ibfk_2` (`CommentID`);

--
-- Indexes for table `user_like_topic`
--
ALTER TABLE `user_like_topic`
  ADD KEY `UserID` (`UserID`,`TopicID`),
  ADD KEY `TopicID` (`TopicID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gamescore`
--
ALTER TABLE `gamescore`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `TopicID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `topic_category`
--
ALTER TABLE `topic_category`
  MODIFY `CategoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `topic_comment`
--
ALTER TABLE `topic_comment`
  MODIFY `CommentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `game_ibfk_1` FOREIGN KEY (`GameID`) REFERENCES `gamescore` (`GameID`);

--
-- Constraints for table `topic`
--
ALTER TABLE `topic`
  ADD CONSTRAINT `topic_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `topic_category` (`CategoryID`),
  ADD CONSTRAINT `topic_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `topic_comment`
--
ALTER TABLE `topic_comment`
  ADD CONSTRAINT `topic_comment_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  ADD CONSTRAINT `topic_comment_ibfk_2` FOREIGN KEY (`TopicID`) REFERENCES `topic` (`TopicID`);

--
-- Constraints for table `user_like_comment`
--
ALTER TABLE `user_like_comment`
  ADD CONSTRAINT `user_like_comment_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  ADD CONSTRAINT `user_like_comment_ibfk_2` FOREIGN KEY (`CommentID`) REFERENCES `topic_comment` (`CommentID`);

--
-- Constraints for table `user_like_topic`
--
ALTER TABLE `user_like_topic`
  ADD CONSTRAINT `user_like_topic_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  ADD CONSTRAINT `user_like_topic_ibfk_2` FOREIGN KEY (`TopicID`) REFERENCES `topic` (`TopicID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
