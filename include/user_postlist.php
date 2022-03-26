<?php
	$sql_get_user_id = mysqli_query($con, "select UserID from user where UserName='".$_SESSION['LVLogin']."'");
	$row_get_user_id = mysqli_fetch_array($sql_get_user_id);
	$user_id = $row_get_user_id["UserID"];
?>

<div class="grid__column-9-5">

	<!--=============== TOPIC 1 ===============-->
	<?php
		$sql_get_topic_category = mysqli_query($con, "select * from topic_category");

		while($sql_row_topic_category = mysqli_fetch_array($sql_get_topic_category)){
			$get_topic_list = "select * from topic where CategoryID = '".$sql_row_topic_category["CategoryID"]."'";

			if(isset($_GET['info'])){
				$info = $_GET['info'];
			}else{
				$info = '';
			}

			if($info){
				if($info == '2'){
					$get_topic_list = "select * from topic where CategoryID = '".$sql_row_topic_category["CategoryID"]."' and UserID='".$user_id."'";

				}else if($info == '3'){
					$get_topic_list = "select t.TopicID, t.TopicName, t.CategoryID, t.UserID, t.Content, t.AskedDate, t.Viewed from topic t, user u, user_like_topic l where u.UserID='".$user_id."' and u.UserID=l.UserID and l.TopicID=t.TopicID and CategoryID = '".$sql_row_topic_category["CategoryID"]."'";
				}else if($info == '4'){
					$get_topic_list = "select t.TopicID, t.TopicName, t.CategoryID, t.UserID, t.Content, t.AskedDate, t.Viewed from topic t, user u, topic_comment c where u.UserID='".$user_id."' and u.UserID=c.UserID and c.TopicID=t.TopicID and CategoryID = '".$sql_row_topic_category["CategoryID"]."'";
				}
			}
			$test_topic_list = $get_topic_list;
			$test_get_topic_list = mysqli_query($con, $test_topic_list);
			$test_row_topic_list = mysqli_fetch_array($test_get_topic_list);

			$sql_get_topic_list = mysqli_query($con, $get_topic_list);
			if($test_row_topic_list["TopicID"]){
				$header = "true";
			}

			if($header == "true"){
	?>
	<div class="forum__topics topics__close">
		<div class="forum__topics_header">
			<span class="forum__topics_title"><?php echo $sql_row_topic_category["CategoryName"] ?></span>
			<div class="forum__topics_more">
				<h3 class="forum__topics_more-label">Xem Thêm</h3>
				<i class="fas fa-arrow-down forum__topics_more-icons"></i>
			</div>
		</div>

		<div class="topics__list">
			<?php
		}
				while($sql_row_topic_list = mysqli_fetch_array($sql_get_topic_list)){
					$sql_get_sum_comment = mysqli_query($con, "select count(CommentID) as count from topic_comment where TopicID = '".$sql_row_topic_list["TopicID"]."'");
					$sql_row_sum_comment = mysqli_fetch_array($sql_get_sum_comment);
			?>
			<a href="?quanly=forum&topic_id=<?php echo $sql_row_topic_list["TopicID"] ?>" class="topics__link">
				<div class="topics__data">
					<div class="topics__titles">
						<h3 class="topics__name"><?php echo $sql_row_topic_list["TopicName"] ?></h3>
						<div>
							<?php 
								$sql_get_userlike_topic = mysqli_query($con, "select count(UserID) AS count from user_like_topic where TopicID = '".$sql_row_topic_list["TopicID"]."'");
								$sql_row_userlike_topic = mysqli_fetch_array($sql_get_userlike_topic);

								if(isset($_SESSION['LVLogin'])){
									$sql_get_user_id = mysqli_query($con, "select UserID from user where UserName ='".$_SESSION['LVLogin']."'");
									$sql_row_user_id = mysqli_fetch_array($sql_get_user_id);
									$sql_get_user_liked = mysqli_query($con, "select * from user_like_topic where UserID='".$sql_row_user_id["UserID"]."' and TopicID='".$sql_row_topic_list["TopicID"]."'");
							?>
									
							<?php 
									if($sql_row_user_liked = mysqli_fetch_array($sql_get_user_liked)){
							?>
							<i class="far fa-thumbs-up topic-option-icon icon--liked">
							<?php 
									}else{
										?>
											<i class="far fa-thumbs-up topic-option-icon icon--like">
										<?php
									}
								}else{
							?>
							<i class="far fa-thumbs-up topic-option-icon icon--like">
							<?php
								}
							?>
								<?php
									echo $sql_row_userlike_topic["count"];
								?>
							</i>
						</div>
					</div>
					<div class="topics__detail">
						<span>
							<?php
								echo $sql_row_topic_list["Content"];
							?>
						</span>
					</div>
					<div class="topics__bottom">
						<span><?php echo $sql_row_topic_list["Viewed"] ?> views | <?php echo $sql_row_sum_comment["count"] ?> answers</span>
						<?php
							$sql_get_topic_author = mysqli_query($con, "select UserName from user where UserID='".$sql_row_topic_list["UserID"]."'");
							$sql_row_topic_author = mysqli_fetch_array($sql_get_topic_author);
						?>
						<span><?php echo $sql_row_topic_author["UserName"] ?></span>
					</div>
				</div>
			</a>
			<?php
					}
				if($header == "true"){
					$header = "false";
			?>
		</div>
	</div>
	<?php
			}
		}
	?>
</div>