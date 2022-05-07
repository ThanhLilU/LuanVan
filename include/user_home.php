<?php
	if(isset($_GET['info'])){
		$info = $_GET['info'];
	}else{
		$info = '';
	}

	if(!isset($_SESSION['LVLogin'])){
		echo '<script> window.location.href = "./index.php"; </script>';
	}
?>
<div class="home_forum">
	<div class="grid__row">
		<!--=============== TITLE ===============-->
		<div class="grid__column-12">
			<h1 class="home__forum-title">
				<?php
					if($info == "1" || $info == ""){
						echo "Thông tin cá nhân";
					}else if($info == "2"){
						echo "Danh sách bài viết";
					}else if($info == "3"){
						echo "Bài viết yêu thích";
					}else if($info == "4"){
						echo "Bình luận của bạn";
					}
				?>
			</h1>
		</div>
	</div>
	<div class="grid__row">
		<div class="grid__column-2-5">
			<div class="user__welcome--wrapper">
				Xin chào, 
				<span>
					<?php echo $_SESSION['LVLogin'] ?>
				</span>
			</div>
			<div class="user__manage--wrapper">
				<div class="manage--wrapper">
					<span class="manage-label">Quản lý tài khoản</span>
					<ul class="manage-list">
						<li class="manage-list-item<?php if($info == '' || $info == '1') echo " manage-list-item--active" ?>">
							<a href="?quanly=user&info=1" class="manage-list-item-link">Thông tin cá nhân</a>
						</li>
					</ul>
				</div>
				<div class="manage--wrapper">
					<span class="manage-label">Quản lý bài viết</span>
					<ul class="manage-list">
						<li class="manage-list-item<?php if($info == '2') echo " manage-list-item--active" ?>">
							<a href="?quanly=user&info=2" class="manage-list-item-link">Danh sách bài đăng</a>
						</li>
						<li class="manage-list-item<?php if($info == '3') echo " manage-list-item--active" ?>">
							<a href="?quanly=user&info=3" class="manage-list-item-link">Bài viết yêu thích</a>
						</li>
						<li class="manage-list-item<?php if($info == '4') echo " manage-list-item--active" ?>">
							<a href="?quanly=user&info=4" class="manage-list-item-link">Bình luận của bạn</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<?php
			if($info && $info != "1"){
				include("include/user_postlist.php");
			}else{
				include("include/user_info.php");
			}
		?>

	</div>
</div>