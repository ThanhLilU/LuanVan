-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2022 at 08:21 AM
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
-- Table structure for table `beuquotes`
--

CREATE TABLE `beuquotes` (
  `ID` int(11) NOT NULL,
  `Content` varchar(1024) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `beuquotes`
--

INSERT INTO `beuquotes` (`ID`, `Content`) VALUES
(1, 'Đại học không phải là con đường duy nhất, nhưng đó là con đường dễ nhất và an toàn nhất.'),
(2, '6174 và 495 là 2 con số Kaprekar, tức là nếu bạn chọn 4 con số bất kỳ, trong đó có ít nhất 2 con số khác nhau, sau đó trộn thứ tự các con số và trừ cho số lật ngược của nó, lặp lại quá trình trên thì đến 1 lúc nào đó kết quả sẽ trở lại con số 4174. Tương tự với 3 con số bạn sẽ được 495.'),
(3, '\\(a:b = a/b = a * b^{-1} = e^{ln(a/b)}\\) vấn đề có đơn giản hay không, tùy thuộc vào cách nhìn của bạn'),
(4, 'Hình vòng xoắn của hoa hướng dương, vỏ ốc, hay các loại vỏ tròn đều tuân theo dãy Fibonacci.'),
(5, 'Khi bạn tráo 1 bộ bài, khả năng cao là thứ tự bộ bài bạn đang cầm chưa bao giờ xuất hiện trong lịch sử, hãy thử học \"Tổ hợp, xác suất\" để hiểu vì sao lại như thế nhé.'),
(6, 'Trong 1 lớp có 23 người, tỉ lệ để có 2 người có trùng sinh nhật là 50%, tỉ lệ này tăng lên đến 99% khi trong phòng có 75 người, bạn hãy thử chứng minh nó bằng toán \"Tổ hợp, xác suất\" nhé.'),
(7, '-\\(40^oC\\) chính là -\\(40^oF\\)'),
(8, 'Có thể bạn đã biết con số googol = \\(10^{10}\\), nhưng googolplex = \\(10^{googol}\\) </p><p>là 1 con số to đến nỗi phần vũ trụ quan sát được không đủ chỗ chứa nếu như ta viết con số đó ra giấy.'),
(9, 'Bạn có biết ma thuật về số 9? Hãy thử nhân 1 số bất kỳ cho 9, sau đó cộng tất cả các chữ số của kết quả cho đến khi kết quả chỉ còn là 1 chữ số, chữ số đó chắc chắn là số 9.... Thật ra đây chỉ là cách nói ngược của dấu hiệu chia hết cho 9 thôi.'),
(10, 'Vào năm 1997, một thủy thủ đoàn của tàu USS Yorktown đã nhập nhầm một con số 0 vào máy tính của tàu, việc này đã làm cho chương trình của tàu xuất hiện phép toán chia cho 0, điều này gây ra lỗi nghiêm trọng khiến con tàu bị đứng yên và không thể di chuyển trong hai giờ tiếp theo.'),
(11, 'Toán học thuần túy, hiểu theo cách đơn giản, là thơ ca của những ý tưởng logic - Albert Einstein'),
(12, 'Một điều thú vị khiến bạn có thể nổ não đó là khi chia 1 cho 998.001, ta sẽ được một dãy số kết quả ghi từ 000 đến 999 theo thứ tự(và có thể còn hơn thế nữa): 0,000001002003004005006...'),
(13, 'Bạn có biết 10! = 3.628.800, đây cũng chính là số giây có trong 6 tuần!'),
(14, 'Số trường hợp có thể xuất hiện của bộ bài khi tráo thứ tự còn nhiều hơn số nguyên tử trên Trái Đất, cụ thể có 52! = 8*\\(10^{67}\\) cách.'),
(15, 'Toán học là thứ đẹp đẽ nhất và là sự sáng tạo mạnh mẽ nhất của tâm hồn con người - Stefan Banach, nhà toán học Ba Lan.'),
(16, 'Toán học là gì? Đơn giản nó chỉ là một nỗ lực có hệ thống để giải các câu đố từ thiên nhiên và vũ trụ - SHakuntala Devi.'),
(17, 'Toán học không hề phân biệt sắc tộc hay ranh giới địa lý, đối với toán, văn hóa của thế giới là một quốc gia - David Hilbert, nhà toán học người Đức.'),
(18, 'Chúng ta không thể là nhà toán học, nếu chưa từng là nhà thơ trong tâm hồn - Sofia Kovalevskaya, nhà toán học người Nga.'),
(19, 'Vì sao giới trẻ lại chán ghét môn Toán học? Lý do nằm ở cách tiếp cận, họ đang coi Toán học chỉ là một \"môn học\" - Shakuntala Devi'),
(20, 'Này Strange, chú biết thứ gì thú vị hơn ma thuật không? Là Toán học - Spider-Man: No Way Home (2021)');

-- --------------------------------------------------------

--
-- Table structure for table `beutopic`
--

CREATE TABLE `beutopic` (
  `TopicID` int(11) NOT NULL,
  `CategoryID` int(11) NOT NULL,
  `TopicTitle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `TopicSubTitle` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `TopicContent` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `TopicAuthor` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'BeUMathematics',
  `TopicImg` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `beutopic`
--

INSERT INTO `beutopic` (`TopicID`, `CategoryID`, `TopicTitle`, `TopicSubTitle`, `TopicContent`, `TopicAuthor`, `TopicImg`) VALUES
(1, 4, 'Phân loại thuật toán sắp xếp p1: Bubble sort', 'Bubble sort là 1 trong những thuật toán sắp xếp đơn giản và phổ biến nhất trong các loại thuật toán sắp xếp cơ bản, với số lần so sánh và sử dụng bộ nhớ ở mức trung bình.', 'Bubble Sort hay sắp xếp nổi bọt, là một giải thuật sắp xếp đơn giản. Hoạt động trên nguyên lý so sánh các cặp phần tử liền kề nhau theo thứ tự và tráo đổi thứ tự nếu chúng chưa theo thứ tự định sẵn.</p><p>Tuy nhiên, giải thuật sắp xếp nổi bọt là giải thuật chậm nếu so với các giải thuật sắp xếp cơ bản khác. Giải thuật này còn chậm hơn giải thuật đổi chỗ trực tiếp mặc dù số lần so sánh là bằng nhau, nhưng do sắp xếp nổi bọt chỉ đổi chỗ 2 phần tử liền kề nên số lần đổi chỗ sẽ nhiều hơn.</p><p>Các bước thực hiện giải thuật:</p><p>+ Bước 1: Xác định phần tử bắt đầu i=0.</p><p>+ Bước 2: Lần lượt so sánh với phần tử thứ i+1, nếu a[i] > a[i+1] tiến hành đổi chỗ a[i] với a[i+1], với biến gán j=n-i lặp lại khi i < j.</p><p>+ Bước 3: Tăng i lên 1 đơn vị: i=i+1.</p><p>+ Bước 4: Nếu i < n, lặp lại bước 2, ngược lại thì dừng vì đã sắp xếp xong dãy đã cho.</p><span>Tổng kết:</span><p>Tuy Bubble Sort là 1 thuật toán không quá tối ưu, nhưng với độ đơn giản thì đây là 1 thuật toán hoàn hảo để giảng dạy và hay được sử dụng để giới thiệu về các khái niệm về thuật toán sắp xếp.', 'BeUMathematics', 'Bubble_Sort.svg.png'),
(2, 4, 'Phân loại thuật toán sắp xếp p2: Quick sort', 'Quick sort là 1 trong những thuật toán sắp xếp đơn giản và hiệu quả nhất.', 'Quick sort là 1 trong những thuật toán sắp xếp đơn giản và hiệu quả nhất.quick sort là 1 trong những thuật toán sắp xếp đơn giản và hiệu quả nhất.quick sort là 1 trong những thuật toán sắp xếp đơn giản và hiệu quả nhất.quick sort là 1 trong những thuật toán sắp xếp đơn giản và hiệu quả nhất.', 'BeUMathematics', 'Sorting_quicksort_anim.gif'),
(3, 4, 'Toán học không khô khan P1: Chaos Game, vẻ đẹp đến từ sự ngẫu nhiên', '1 trong những dạng hình học thô thú vị nhất trong toán học đó là \"The Chaos Game\". The Chaos Game là một dạng hình học đặc biệt với n điểm bắt đầu tương ứng với hình học đều có n đỉnh, sau đó chọn ngẫu nhiên 1 điểm ở chính giữa 2 điểm khác(có hoặc không theo quy luật), lặp đi lặp lại.', 'Có rất rất nhiều hình học có thể tạo trong \"The Chaos Game\" bằng cách thay đổi các yếu tố như: Số đỉnh, quy luật chọn điểm, độ phân bố,..</p><p>Hãy thử vẽ \"The Chaos Game\" của bạn nhé. Ví dụ để vẽ Chaos Game hình tam giác:</p><p>+ Bước 1: Chọn 3 đỉnh của tam giác đều</p><p>+ Bước 2: Ngẫu nhiên chọn 1 điểm bên trong tam giác, lấy nó làm điểm hiện tại.</p><p>+ Bước 3: Chọn 1 đỉnh bất kỳ</p><p>+ Bước 4: Đánh dấu điểm chính giữa vị trí hiện tại và đỉnh đã chọn.</p><p>+ Bước 5: Lấy điểm vừa đánh dấu làm điểm hiện tại.</p><p>+ Bước 6: Lặp lại bước 3.</p><p>Có rất nhiều hình học nổi tiếng có thể tạo bởi Chaos Game như: Sierpinski triangle, Sierpinski carpet, Sierpinski snowflake,...</p><p>Vẻ đẹp của \"The Chaos Game\" không đến từ sự hoàn mỹ, cũng không đến từ ý nghĩ sâu xa, mà chính từ sự ngẫu nhiên của toán học, của sự \"bất quy tắc\" mà vẫn theo quy luật.</p><p>Có thể nói, The Chaos Game có thể đại diện cho quy luật của vũ trụ, khi mà mọi thứ dường như rất \"ngẫu nhiên\" nhưng thật ra tất cả đều hoạt động chính xác, tự động theo những quy tắc ngầm trong vũ trụ.</p><p>Bạn có biết:</p><p>1: Tháp Pascal cũng là 1 dạng ChaosGame, với các điểm được đánh dấu là số lẻ. Bạn có thể xem nó bằng cách search: \"Sierpinski Pascal triangle\".</p><span>\"Không có gì trong Tự nhiên là ngẫu nhiên... Một thứ chỉ xuất hiện ngẫu nhiên khi ta chưa có sự hiểu biết về nó\" - Spinoza', 'BeUMathematics', 'Sierpinski_Chaos.gif'),
(4, 1, 'Chứng minh định lý P1: Định lý Cosin', 'Định lý hàm Cosin lần đầu tiên được phát bởi AI Kashi(1380 - 22/06/1429), một nhà toán học nổi tiếng người Iran. Ông đồng thời là nhà thiên văn học nổi tiếng vùng Trung Á, một trong các nhà bác học lớn của trường phái Samarkand đầu thế kỷ XV.', 'Công thức của định lý Cosin:</p><p>$$a^2 = b^2 + c^2 - 2bccosA$$$$b^2 = a^2 + c^2 - 2accosB$$$$c^2 = a^2 + b^2 - 2abcosC$$</p><p>Định lý Cosin phát biểu như sau: \"Ở trong một tam giác phẳng, bình phương một cạnh bằng tổng bình phương hai cạnh còn lại tri đi hai lần tích của chúng với cosin của góc xen giữa hai cạnh đó\".</p><p>Định lý cosin là một trong những định lý quan trọng trong việc giải các bài tập hình học liên quan đến tam giác và hình tròn:</p><p>+ Xác định cạnh thứ 3 của một tam giác</p><p>Định lý cosin:</p><p>Định lý cosin:</p><p></p><p>Để chứng minh được định lý Cosin, ta cần các kiến thức sau:</p><p>1: cosA = \\({{kề} \\over {huyền}}\\); sinA = \\({{đối} \\over {huyền}}\\)</p><p>2: \\(a^2 + b^2 = c^2\\)</p><p>3: \\({sin^2}θ + {cos^2}θ = 1\\)</p><p>+ Bước 1:</p><p>\\(sinA = {x \\over c}\\) => \\(x = c * sinA\\)</p><p>\\(cosA = {m \\over c}\\) => \\(m = c * cosA\\)</p><p>\\(n = b - m\\) => \\(n = b - c * cosA\\)</p><p>Bước 2: Ta có: \\(a^2 = x^2 + n^2\\)</p><p><=> \\(a^2 = (c * sinA)^2 + (b - c * cosA)^2\\)</p><p><=> \\(a^2 = (c^2 {sin^2}A) + (b^2 - 2bccosA + c^2cos^2A)\\)</p><p><=> \\(a^2\\) = \\(c^2 {sin^2}A + c^2cos^2A + b^2 - 2bccosA\\)</p><p><=> \\(a^2\\) = \\(c^2(sin^2A + cos^2A) + b^2 - 2bccosA\\)</p><p><=> \\(a^2 = c^2 * 1 + b^2 - 2bccosA\\)</p><span><=> \\(a^2 = b^2 + c^2 - 2bccosA\\)', 'BeUMathematics', '1920px-Triangle_with_notations_2.svg.png'),
(5, 2, 'Tất tần tật về số nguyên tố', 'Số nguyên tố là số tự nhiên lớn hơn 1 và không phải là tích của 2 số tự nhiên nhỏ hơn. Nói cách khác, số nguyên tố là những số chỉ có đúng 2 ước số là 1 và chính nó.', 'Có rất nhiều cách để xác định 1 số có phải là số nguyên tố hay không, như trong ví dụ trên đang sử dụng Sàng Eratosthenes để xác định các số nguyên tố trong 100 số tự nhiên đầu tiên:</p><p>+ Bước 1: Tạo 1 danh sách các số tự nhiên liên tiếp từ 2 đến n.</p><p>+ Bước 2: Lấy số i đầu tiên trong danh sách chưa bị đánh dấu, tất cả bội số của i: 2i, 3i, 4i,... trong danh sách sẽ bị đánh dấu vì không phải là số nguyên tố.</p><p>+ Bước 3: Nếu i không có bội trong danh sách chưa bị đánh dấu thì đánh dấu i là một số nguyên tố.</p><p>+ Bước 4: Xét i+1 lớn hơn n thì dừng thuật toán, ngược lại, quay lại bước 2.</p><p></p><p>Các tính chất thú vị của số nguyên tố:</p><p>_ Số nguyên tố nhỏ nhất vừa là số nguyên tố chẵn duy nhất là số 2.</p><p>_ Cũng như số tự nhiên, số nguyên tố không có giới hạn, nói cách khác số nguyên tố là vô hạn.</p><p>_ Khi nhân 2 số nguyên tố với nhau, kết quả không bao giờ là một số chính phương(số có căn bậc 2 là một số tự nhiên).</p><p>_ Ước nguyên dương nhỏ nhất khác 1 của một số tự nhiên là 1 số nguyên tố.</p><p></p><p>Các ứng dụng của số nguyên tố:</p><p>_ Ứng dụng đầu tiên và cũng là quan trọng nhất đó là dùng để phân tích 1 số ra thừa số nguyên tố. Ví dụ: 2712 = \\(2^3\\) * 3 * 113, 2211 = 3 * 11 * 67.</p><p>_ Số nguyên tố còn sử dụng trong các lĩnh vực chuyên sâu và phức tạp hơn nữa như: Trình tạo mã ngẫu nhiên, mã hóa(Pseudo-Random numbers), ứng dụng trong việc vẽ ngũ giác, cơ học lượng tử, sinh học(Chu trình tiến hóa của ve sầu), nghệ thuật và văn học,...</p><p></p><p>Sự thật thú vị về số nguyên tố:</p><p>1: Với bất kỳ số nguyên dương n lớn hơn 1, có ít nhất 2 số nguyên tố giữa \\(n^2\\) và \\((n+1)^2\\). Cụ thể hơn, sẽ có ít nhất 1 số nguyên tố giữa \\(n^2\\) và n(n+1) và ít nhất 1 số nguyên tố khác giữa n(n+1) và \\((n+1)^2\\).</p><p>2: Nếu không có số nguyên tố, chúng ta sẽ không bao giờ có mật mã học, vì số nguyên tố sẽ cung cấp mã sử lỗi(giữa vô hạn trường thông tin) thứ được dùng trong liên lạc viễn thông để đảm bảo rằng thông điệp đã được gửi và nhận một cách tự động.</p><p>3: \\(2^{77,232,917}\\) - 1 được phát hiện bởi 1 tình nguyện viên đã dành 14 năm để tính toán, là số nguyên tố lớn nhất được biết đến, và cũng từ đó, 1 công thức tính số nguyên tố mới được phát triển có tên Mersenne Primes: \\(2^p\\) - 1, với p là số nguyên tố.', 'BeUMathematics', 'prime-numbers-1.jpg'),
(7, 2, 'Chứng minh đẳng thức: Hằng đẳng thức số 3', 'Hằng đẳng thức chính là công cụ tốt nhất để có thể giải quyết một cách nhanh chóng các vấn đề trong toán học. Một bài toán phức tạp có thể được phân tích và trở nên rất dễ dàng với hằng đẳng thức. Và để có thể sử dụng một cách hiệu quả, ta phải biết vì sao các hằng đẳng thức lại có công thức như vậy.</p><p>Nếu bạn đang tìm kiếm điều đó, bài viết này chính là món quà mà BeUMathematics dành cho bạn, với series \"Chứng minh đẳng thức\" các bạn có thể hiểu được cụ thể các hằng đẳng thức, các cách chứng minh khác nhau của nó, mong rằng qua series này, các bạn đều có thể sử dụng được các hằng đẳng thức một cách dễ dàng và hiệu quả.</p><p>Chứng minh đẳng thức P3: Hằng đẳng thức số 3:</p><p>$$a^2 - b^2 = (a + b) (a - b)$$', 'Ví dụ trên chính là chứng minh cho hằng đẳng thức thứ 3 bằng hình học</p><p>Có rất nhiều cách để chứng minh được các hằng đẳng thức, việc biết và hiểu được cặn kẽ các hằng đẳng thức sẽ giúp cho bạn có thể sử dụng chúng một cách tốt hơn. Dưới đây là ví dụ về chứng minh hằng đẳng thức thứ 3 bằng toán học:</p><p>=> \\(a^2 - b^2 = a^2 - b^2 -ab +ab\\)</p><p>=> \\(a^2 - b^2 = a^2 - ab + ab -b^2\\)</p><p>=> \\(a^2 - b^2 = a(a - b) + b(a - b)\\)</p><p>=> \\(a^2 - b^2 = (a - b) (b + a)\\)</p><span>=> \\(a^2 - b^2 = (a + b) (a - b)\\)', 'BeUMathematics', 'hang-dang-thuc-dang-nho-04.jpg'),
(8, 2, 'Chứng minh đẳng thức: Hằng đẳng thức số 1', 'Hằng đẳng thức chính là công cụ tốt nhất để có thể giải quyết một cách nhanh chóng các vấn đề trong toán học. Một bài toán phức tạp có thể được phân tích và trở nên rất dễ dàng với hằng đẳng thức. Và để có thể sử dụng một cách hiệu quả, ta phải biết vì sao các hằng đẳng thức lại có công thức như vậy.</p><p>Nếu bạn đang tìm kiếm điều đó, bài viết này chính là món quà mà BeUMathematics dành cho bạn, với series \"Chứng minh đẳng thức\" các bạn có thể hiểu được cụ thể các hằng đẳng thức, các cách chứng minh khác nhau của nó, mong rằng qua series này, các bạn đều có thể sử dụng được các hằng đẳng thức một cách dễ dàng và hiệu quả.</p><p>Chứng minh đẳng thức P1: Hằng đẳng thức số 1:</p><p>$$(a + b)^2 = a^2 + 2ab + b^2$$', 'Ví dụ trên chính là chứng minh cho hằng đẳng thức thứ 3 bằng hình học</p><p>Có rất nhiều cách để chứng minh được các hằng đẳng thức, việc biết và hiểu được cặn kẽ các hằng đẳng thức sẽ giúp cho bạn có thể sử dụng chúng một cách tốt hơn. Dưới đây là ví dụ về chứng minh hằng đẳng thức thứ 3 bằng toán học:</p><p>=> \\((a + b)^2 = (a + b) (a + b)\\)</p><p>=> \\((a + b)^2 = a * (a + b) + b * (a + b)\\)</p><p>=> \\((a + b)^2 = a * a + a * b + b * a + b * b\\)</p><p>=> \\((a + b)^2 = a^2 + ab + ba + b^2\\)</p><span>=> \\((a + b)^2 = a^2 + 2ab + b^2\\) ', 'BeUMathematics', 'hang-dang-thuc-dang-nho-04.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `beutopicinclude`
--

CREATE TABLE `beutopicinclude` (
  `IncludeID` int(11) NOT NULL,
  `TopicID` int(11) NOT NULL,
  `IncludeLink` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `beutopicinclude`
--

INSERT INTO `beutopicinclude` (`IncludeID`, `TopicID`, `IncludeLink`) VALUES
(1, 1, 'assets/canva/Bubble_Sort/sketch.js'),
(2, 2, 'assets/canva/Quick_Sort/sketch.js'),
(3, 3, 'assets/canva/Chaos_Game/sketch_3-5-6-7.js'),
(4, 4, 'assets/canva/CosSin_theorem/sketch.js'),
(5, 5, 'assets/canva/Eratosthenes_Sieve/sketch.js'),
(6, 7, 'assets/canva/HangDangThuc_1/sketch3.js'),
(7, 8, 'assets/canva/HangDangThuc_1/sketch1.js');

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `GameID` int(11) NOT NULL,
  `GameName` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`GameID`, `GameName`) VALUES
(1, 'Snake'),
(2, 'Flappy Bird'),
(3, 'Pi in the Sky');

-- --------------------------------------------------------

--
-- Table structure for table `gamescore`
--

CREATE TABLE `gamescore` (
  `ID` int(11) NOT NULL,
  `GameID` int(11) NOT NULL,
  `UserName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `gamescore`
--

INSERT INTO `gamescore` (`ID`, `GameID`, `UserName`, `Score`) VALUES
(1, 2, 'Anonymous', 0),
(2, 2, 'Nguyễn Đình Thanh', 0),
(3, 1, 'Thành Đinh', 64),
(4, 2, 'Đình Thanh', 46),
(5, 1, 'Nguyễn Thanh', 52),
(6, 1, 'Thanh Nguyễn', 76),
(7, 2, 'Đình Nguyễn', 56),
(8, 1, 'Nguyễn Đình', 64),
(9, 1, 'Thanh Đình Nguyễn', 34),
(10, 1, 'Nguyễn Đình Thanh', 65),
(11, 2, '', 46),
(12, 1, 'Nguyễn Thanh Đình', 12),
(13, 2, 'Đình Thanh Nguyễn', 23),
(14, 2, 'Thanh Đình Nguyễn', 123),
(15, 1, 'Nguyễn Đình Thanhhhhhh', 2),
(16, 1, 'Lệ Rơi', 38),
(17, 1, '26032022', 2),
(18, 3, 'Anonymous', 6),
(23, 1, 'Anonymous', 1);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_rank_prac`
--

CREATE TABLE `quiz_rank_prac` (
  `UserName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `RightAnswer` int(11) NOT NULL,
  `QuizTime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `quiz_rank_prac`
--

INSERT INTO `quiz_rank_prac` (`UserName`, `RightAnswer`, `QuizTime`) VALUES
('Nguyễn Đình Thanh', 25, 350),
('Thanh Nguyễn Đình', 15, 400),
('Đình Thanh Nguyễn', 25, 300),
('Thanh Đình Nguyễn', 25, 250);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_rank_test`
--

CREATE TABLE `quiz_rank_test` (
  `UserName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `RightAnswer` int(11) NOT NULL,
  `TotalCount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `quiz_rank_test`
--

INSERT INTO `quiz_rank_test` (`UserName`, `RightAnswer`, `TotalCount`) VALUES
('Anonymous', 0, 1),
('Nguyễn Đình Thanh', 59, 102),
('Thanh Đình Nguyễn', 35, 90),
('Đình Thanh Nguyễn', 60, 90),
('Thanh Nguyễn Đình', 10, 20),
('Nguyễn Thanh Đình', 35, 70),
('Đình Nguyễn Thanh', 60, 150);

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `TopicID` int(11) NOT NULL,
  `TopicName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `CategoryID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Content` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `AskedDate` date NOT NULL,
  `Viewed` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`TopicID`, `TopicName`, `CategoryID`, `UserID`, `Content`, `AskedDate`, `Viewed`) VALUES
(11, 'Bạn đã thực sự hiểu bản chất của \"Hằng đẳng thức\"?', 1, 1, 'Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con', '2022-03-01', 29),
(12, 'Cách tính tổng n số nguyên tăng dần', 2, 1, 'Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con', '0000-00-00', 0),
(13, 'Cách tính ma trận 2x2', 3, 1, 'Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con', '0000-00-00', 0),
(16, 'Cách tính số PI dựa vào số lần chạm của 2 vật', 5, 2, 'Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con số của vũ trụ Số PI là gì, vì sao nó lại được gọi là con', '0000-00-00', 0),
(18, 'asdasd', 1, 1, 'asdgfnvcvb<br>xcvbwertbn<br>sfghm', '2022-03-03', 0),
(19, 'Làm sao để hiểu được các bất đẳng thức cơ bản?', 2, 1, 'Tình hình là hiện nay mình có gặp 1 số bài toán yêu cầu phải dùng các bất đẳng thức cơ bản cụ thể là bất đẳng thức côsi, nhưng mà giáo trình của cô giáo trên lớp thì quá khó hiểu.<br>Kính mong các anh/chị đi trước có thể giải thích cho e với ạ, e đang hoang mang quá.<br>E cảm ơn mọi người rất nhiều ạ.', '2022-03-03', 0),
(20, 'Pi là số gì và vì sao người ta lại phát minh ra số Pi', 5, 1, 'Em đang bắt đầu học cấp 2 và hôm nay có bài về số Pi</p> <p>Nhưng cô giáo của em chỉ dạy là Pi = 3.14..</p> <p>Vậy thì số Pi đến từ đâu, sao người ta lại biết bằng 3.14?</p> <p>Mong nhận được câu trả lời từ các anh chị, em xin cảm ơn ạ', '2022-03-04', 0),
(26, 'Đây là câu hỏi test', 1, 9, 'Nội dung câu hỏi test', '2022-05-05', 0);

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
(4, 1, 11, 'alo <br><br> aloooooo<br> alo'),
(8, 1, 11, 'Bài viết rất hay<br>Mình luôn ủng hộ bạn'),
(11, 4, 11, 'Chào mn</p> <p>Mình là Võ Thị Diễm My'),
(16, 1, 19, 'Bạn hãy tham khảo bài viết: CHỨNG MINH ĐỊNH LÝ P1: ĐỊNH LÝ COSIN nhé!'),
(17, 1, 11, 'Chào mn'),
(19, 9, 11, 'Câu trả lời test');

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
(1, 1, 'NguyenDinhThanh', 'Nguyễn Đình Thanh', 'LuanVan@B1805813'),
(2, 2, 'Thanh', 'Nguyễn Thanh', 'thanh123'),
(4, 2, 'B1805813', 'Nguyễn Đình Thanh B1805813', 'B1805813'),
(6, 2, 'thanhdinh', 'Thanh Nguyễn Đình', '123'),
(9, 2, 'thanhdemo', 'Thanh', '123'),
(10, 2, 'Thanh1', 'Thanh Dinh', '123');

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
(1, 16),
(9, 11);

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
(1, 11),
(1, 19),
(4, 11),
(9, 11),
(9, 26);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `beuquotes`
--
ALTER TABLE `beuquotes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `beutopic`
--
ALTER TABLE `beutopic`
  ADD PRIMARY KEY (`TopicID`),
  ADD KEY `CategoryID` (`CategoryID`);

--
-- Indexes for table `beutopicinclude`
--
ALTER TABLE `beutopicinclude`
  ADD PRIMARY KEY (`IncludeID`),
  ADD KEY `TopicID` (`TopicID`);

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
  ADD KEY `GameID` (`GameID`);

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
-- AUTO_INCREMENT for table `beuquotes`
--
ALTER TABLE `beuquotes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `beutopic`
--
ALTER TABLE `beutopic`
  MODIFY `TopicID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `beutopicinclude`
--
ALTER TABLE `beutopicinclude`
  MODIFY `IncludeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `GameID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `gamescore`
--
ALTER TABLE `gamescore`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `TopicID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `topic_category`
--
ALTER TABLE `topic_category`
  MODIFY `CategoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `topic_comment`
--
ALTER TABLE `topic_comment`
  MODIFY `CommentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `beutopic`
--
ALTER TABLE `beutopic`
  ADD CONSTRAINT `beutopic_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `topic_category` (`CategoryID`);

--
-- Constraints for table `beutopicinclude`
--
ALTER TABLE `beutopicinclude`
  ADD CONSTRAINT `beutopicinclude_ibfk_1` FOREIGN KEY (`TopicID`) REFERENCES `beutopic` (`TopicID`);

--
-- Constraints for table `gamescore`
--
ALTER TABLE `gamescore`
  ADD CONSTRAINT `gamescore_ibfk_1` FOREIGN KEY (`GameID`) REFERENCES `game` (`GameID`);

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
