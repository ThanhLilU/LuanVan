<div class="grid__column-3 menu--responsive" id="nav-menu-wrapper">
	<div class="nav__menu-list" id="nav-menu">
		<div class="nav__menu">
			<?php
				if(isset($_SESSION['LVLogin'])){
			?>
				<div class="nav__menu-user">
					<span class="user_name" id="userName"><?php echo $_SESSION['LVLogin'] ?></span>
					<ul class="nav__user-menu-list">
						<li class="nav__user-menu-option">
							<a class="" href="?quanly=user&info=1">
								Tài khoản của tôi
							</a>
						</li>
						<li class="nav__user-menu-option">
							<a class="" href="?quanly=user&info=2">
								Danh sách bài đăng
							</a>
						</li>
						<li class="nav__user-menu-option">
							<a class="" href="?quanly=user&info=3">
								Bài viết yêu thích
							</a>
						</li>
						<li class="nav__user-menu-option">
							<a class="" href="?quanly=user&info=4">
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
					Toán học
					<i class="fas fa-arrow-down nav__menu-content-icon"></i>
				</span>
				<div class="nav__menu-content-items">
					<a href="?quanly=mathematic" class="nav__menu-content-item">Tất cả</a>
					<a href="?quanly=mathematic&danhmuc=1" class="nav__menu-content-item">Hình học</a>
					<a href="?quanly=mathematic&danhmuc=2" class="nav__menu-content-item">Đại số</a>
					<a href="?quanly=mathematic&danhmuc=3" class="nav__menu-content-item">Toán cao cấp</a>
					<a href="?quanly=mathematic&danhmuc=4" class="nav__menu-content-item">Sự kỳ diệu của con số</a>
					<a href="?quanly=mathematic&danhmuc=5" class="nav__menu-content-item">PI và những điều chưa biết</a>
				</div>
			</div>

			<div class="nav__menu-content-wrapper nav-item--close">
				<span class="nav__menu-content-title">
					Diễn đàn
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
						Đố nhanh
					</span>
				</a>
			</div>
			<div class="nav__menu-content-wrapper">
				<a href="?quanly=game" class="nav__menu-content-item">
					<span class="nav__menu-content-title">Trò chơi</span>
				</a>

			</div>
			<div class="nav__menu-content-wrapper">
				<span class="nav__menu-content-title">Other</span>
			</div>
		</div>
	</div>
</div>