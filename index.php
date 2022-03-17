<?php
	include('db/connect.php');
	session_start();
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!--==================== ICONS ====================-->
		<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
		<link rel="stylesheet" href="assets/fonts/fontawesome-free-5.15.4-web/css/all.min.css">

		<!--==================== SWIPER CSS ====================-->
		<link rel="stylesheet" href="assets/css/swiper-bundle.min.css">

		<!--==================== CSS ====================-->
		<link rel="stylesheet" href="assets/css/main.css">

		<!--==================== P5JS ====================-->
		<script src="assets/canva/libraries/p5.js"></script>
		<script src="assets/canva/libraries/p5.sound.js"></script>

		<!--==================== MATHJAX ====================-->
		<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
		<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

		<title>BeUMathematics</title>
	</head>
	<body class="dark-theme">
		<?php
			if(isset($_GET['status']) && $_GET['status']=='logout'){
				unset($_SESSION['LVLogin']);

				//Unset token and user data from session
				unset($_SESSION['token']);
				unset($_SESSION['userData']);

				//Destroy entire session
				session_destroy();
				header("Location: index.php");
			}
		?>
		<header class="header" id="header">
			<nav class="nav container">
				<div class="nav__logo">
					<img src="assets/img/logo-ori-1-rmbg.jpg" alt="" class="nav__logo-img logo--active">
					<img src="assets/img/logo-ori-3-rmbg.jpg" alt="" class="nav__logo-img">
					<a href="index.php" class="nav__logo-link" id="nav__logo-link"><span>BeUMathematics</span></a>
				</div>

				<div class="nav__btns">
					<button type="button" class="btn-round btn-switch change-time" id="theme-button" onclick="changeTheme()"><span></span></button>
					<div class="nav__toggle" id="nav--toggle">
						<i class="fas fa-ellipsis-h nav__toggle-icon"></i>
					</div>
				</div>
			</nav>
		</header>
		<div class="modal modal-active" id="modal-menu">
			<div class="modal__overlay modal__overlay--active" id="modal-overlay-menu"></div>
			<div class="modal__body modal-right modal__movingRL">
				<div class="nav__menu-list" id="nav-menu">
					<div class="nav__menu">
						<?php
							if(isset($_SESSION['LVLogin'])){
						?>
						<div class="nav__menu-user">
							<span class="user_name" id="userName"><?php echo $_SESSION['LVLogin'] ?></span>
							<ul class="nav__user-menu-list">
								<li class="nav__user-menu-option">
									<a class="" href="">
										Tài khoản của tôi
									</a>
								</li>
								<li class="nav__user-menu-option">
									<a class="" href="">
										Danh sách bài đăng
									</a>
								</li>
								<li class="nav__user-menu-option">
									<a class="" href="">
										Bài viết yêu thích
									</a>
								</li>
								<li class="nav__user-menu-option">
									<a class="" href="">
										Bình luận của bạn
									</a>
								</li>
								<li class="nav__user-menu-option">
									<a onclick="userLogOut()">
										Đăng xuất
									</a>
								</li>
							</ul>
						</div>
						
						<?php
							}else{
						?>
						<div class="nav__menu-option nav__menu--active">
							<div class="nav__menu-register" id="navRegister">Đăng ký</div>
							<div class="nav__menu-login" id="navLogin">Đăng nhập</div>
						</div>
						<?php
							}
						?>
					</div>
					
					<div class="nav__menu-content">
						<div class="nav__menu-content-wrapper nav-item--close">
							<span class="nav__menu-content-title">
								Mathematics
								<i class="fas fa-arrow-down nav__menu-content-icon"></i>
							</span>
							<div class="nav__menu-content-items">
								<a href="" class="nav__menu-content-item">Tất cả</a>
								<a href="" class="nav__menu-content-item">Hình học</a>
								<a href="" class="nav__menu-content-item">Đại số</a>
								<a href="" class="nav__menu-content-item">Toán cao cấp</a>
								<a href="" class="nav__menu-content-item">Sự kỳ diệu của con số</a>
								<a href="" class="nav__menu-content-item">PI và những điều chưa biết</a>
							</div>
						</div>
						
						<div class="nav__menu-content-wrapper nav-item--close">
							<span class="nav__menu-content-title">
								Forum
								<i class="fas fa-arrow-down nav__menu-content-icon"></i>
							</span>
							<div class="nav__menu-content-items">
								<a href="?quanly=forum" class="nav__menu-content-item">Tất cả</a>
								<a href="?quanly=forum&danhmuc=1" class="nav__menu-content-item">Hình học</a>
								<a href="?quanly=forum&danhmuc=2" class="nav__menu-content-item">Đại số</a>
								<a href="?quanly=forum&danhmuc=3" class="nav__menu-content-item">Toán cao cấp</a>
								<a href="?quanly=forum&danhmuc=4" class="nav__menu-content-item">Sự kỳ diệu của con số</a>
								<a href="?quanly=forum&danhmuc=5" class="nav__menu-content-item">PI và những điều chưa biết</a>
							</div>
						</div>
						<div class="nav__menu-content-wrapper">
							<a href="?quanly=quiz" class="nav__menu-content-item">
								<span class="nav__menu-content-title">
								Quiz
								</span>
							</a>
						</div>
						<div class="nav__menu-content-wrapper">
							<span class="nav__menu-content-title">Game</span>
						</div>
						<div class="nav__menu-content-wrapper">
							<span class="nav__menu-content-title">Other</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--==================== MAIN ====================-->
		<main class="main">

			<!--==================== HOME ====================-->
			<section class="home section grid-auto" id="home">
				<div class="grid__row app__content">
					<div class="grid__column-12">

						<?php
							if(isset($_GET['quanly'])){
								$quanly = $_GET['quanly'];
							}else{
								$quanly = '';
							}

							if($quanly == 'forum'){
								if(isset($_GET['topic_id'])){
										include("include/home_forum_topic.php");
								}else{
									include("include/home_forum.php");
								}
							}else if($quanly == 'quiz'){
								if(isset($_GET['type'])){
									$iqsType = $_GET['type'];
								}else{
									$iqsType = '';
								}

								if($iqsType == 'add'){
									include("include/quiz_add.php");
								}else if($iqsType == 'sub'){
									include("include/quiz_sub.php");
								}else if($iqsType == 'multi'){
									include("include/quiz_multiply.php");
								}else if($iqsType == 'divide'){
									include("include/quiz_divide.php");
								}else{
									include("include/quiz_add.php");
									include("include/quiz_menu.php");
								}
							}else{
								include("include/home_page.php");
							}
							
						?>

						<!--==================== HOME PAGE ====================-->
						<?php
							// include("include/home_page.php");
						?>

						<!--==================== CONTENT DETAIL ====================-->
						<?php
							// include("include/home_content_detail.php");
						?>
						
					</div>
				</div>
			</section>
		</main>

		<!--==================== FOOTER ====================-->
		<footer class="footer">
			<div class="footer__bg">
				<div class="footer__container container grid">
					<div>
						<h1 class="footer__title">Nguyễn Đình Thanh</h1>
						<span class="footer__subtilte">Software Developer</span>
					</div>

					<ul class="footer__links">
						<li>
							<a href="#services" class="footer__link">Services</a>
						</li>
						<li>
							<a href="#portfolio" class="footer__link">Portfolio</a>
						</li>
						<li>
							<a href="#contact" class="footer__link">Contact Me</a>
						</li>
					</ul>

					<ul class="footer__socials">
						<li class="footer__social">
							<a href="https://www.facebook.com/profile.php?id=100011715779905" class="footer__social-link">
								<i class="fab fa-facebook footer__social-icon"></i>
							</a>
						</li>
						<li class="footer__social">
							<a href="https://www.instagram.com/qsczsemko/" class="footer__social-link" id="insta-icon">
								<i class="fab fa-instagram-square footer__social-icon" aria-hidden="true"></i>
							</a>
						</li>
						<li class="footer__social">
							<a href="https://github.com/BeThanhU" class="footer__social-link">
								<i class="fab fa-github footer__social-icon"></i>
							</a>
						</li>
					</ul>
				</div>

				<p class="footer__copy">&#169; Nguyễn Đình Thanh. All right reserved</p>
			</div>
		</footer>

		<div class="modal" id="modal">
			<div class="modal__overlay" id="modal-overlay"></div>
			<div class="modal__body modal_growth">
				<div class="modal__container">

					<!--=============== LOGIN FORM ===============-->
					<div class="modal__wrapper" id="modalLogin">
						<div class="modal__header">
							<span>Đăng Nhập</span>
						</div>
						<div class="modal__content">
							<input type="text" placeholder="Tên tài khoản" id="loginName" required>
							<input type="password" placeholder="Mật khẩu" id="loginPass" required>
						</div>
					</div>

					<!--=============== REGISTER FORM ===============-->
					<div class="modal__wrapper" id="modalRegister">
						<div class="modal__header">
							<span>Đăng Ký</span>
						</div>
						<div class="modal__content">
							<input type="text" placeholder="Họ và tên" id="regisRealName" required>
							<input type="text" placeholder="Tên tài khoản" id="regisUserName" required>
							<input type="password" placeholder="Mật khẩu" id="regisPass" required>
							<input type="password" placeholder="Nhập lại mật khẩu" id="regisConfirmPass" required>
						</div>
					</div>
					
					<div class="modal__option button-right">
						<button class=" button button--white" id="modal--back">
							Trở lại
						</button>
						<button id="btnLogin" class="button">
							Đăng nhập
						</button>
						<button id="btnRegister" class="button">
							Đăng ký
						</button>
					</div>
				</div>
			</div>
		</div>

		<!--==================== SCROLL TOP ====================-->
		<a href="#" class="scrollup" id="scroll-up">
			<i class="uil uil-arrow-up scrollup__icon"></i>
		</a>

		<!--==================== SWIPER JS ====================-->
		<script src="javascript/swiper-bundle.min.js"></script>

		<!--==================== MAIN JS ====================-->
		<script src="javascript/main.js"></script>

		<?php
			if(isset($_GET['status']) && $_GET['status']=='login'){
				echo '<script> showLoginForm() </script>';
			}else if(isset($_GET['status']) && $_GET['status']=='register'){
				echo '<script> showRegisterForm() </script>';
			}
		?>
	</body>
</html>