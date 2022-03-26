<?php
	$sql_get_user_info = mysqli_query($con, "select * from user where UserName='".$_SESSION['LVLogin']."'");
	$row_get_user_info = mysqli_fetch_array($sql_get_user_info);
	if($row_get_user_info["UserType"] == "1"){
		$userRole = "Quản lý";
	}else if($row_get_user_info["UserType"] == "2"){
		$userRole = "Thành viên";
	}else if($row_get_user_info["UserType"] == "3"){
		$userRole = "Thành viên tích cực";
	}
	$user_id = $row_get_user_info["UserID"];
?>

<div class="grid__column-9-5">
	<div class="user__info--wrapper">
		<div class="user__info_header--wrapper">
			<div class="grid__row">
				<div class="grid__column-12">
					<div class="info_header_head">
						Họ và tên: <span><?php echo $row_get_user_info["RealName"] ?></span>
					</div>
					<div class="info_header_role">
						Chức vụ: <span><?php echo $userRole ?></span>
					</div>
				</div>
			</div>
		</div>
		<?php
			$get_user_topicCount = "select count(t.UserID) as pp from topic t where t.UserID='".$user_id."'";
			$get_user_topicLiked = "select count(l.UserID) as pl from user_like_topic l where l.UserID='".$user_id."'";
			$get_user_cmtPosted = "select count(c.UserID) pc from topic_comment c where c.UserID='".$user_id."'";

			$sql_get_user_topicCount = mysqli_query($con, $get_user_topicCount);
			$row_get_user_topicCount = mysqli_fetch_array($sql_get_user_topicCount);

			$sql_get_user_topicLiked = mysqli_query($con, $get_user_topicLiked);
			$row_get_user_topicLiked = mysqli_fetch_array($sql_get_user_topicLiked);

			$sql_get_user_cmtPosted = mysqli_query($con, $get_user_cmtPosted);
			$row_get_user_cmtPosted = mysqli_fetch_array($sql_get_user_cmtPosted);

			if($row_get_user_topicCount["pp"]){
				$topicCount = $row_get_user_topicCount["pp"];
			}else{
				$topicCount = 0;
			}

			if($row_get_user_topicLiked["pl"]){
				$topicLiked = $row_get_user_topicLiked["pl"];
			}else{
				$topicLiked = 0;
			}

			if($row_get_user_cmtPosted["pc"]){
				$cmtPosted = $row_get_user_cmtPosted["pc"];
			}else{
				$cmtPosted = 0;
			}

		?>
		<div class="user__info_body--wrapper">
			<div class="grid__row">
				<div class="grid__column-6">
					<span class="info_body_content">
						Số bài đã đăng:
						<p>
							<?php echo $topicCount; ?>
						</p>
					</span>
				</div>
				<div class="grid__column-6">
					<span class="info_body_content">
						Số bài đã thích:
						<p>
							<?php echo $topicLiked; ?>
						</p>
					</span>
				</div>
			</div>
			<div class="grid__row">
				<div class="grid__column-6">
					<span class="info_body_content">
						Số bình luận đã đăng:
						<p>
							<?php echo $cmtPosted; ?>
						</p>
					</span>
				</div>
			</div>
		</div>
	</div>
	<?php
	?>
</div>