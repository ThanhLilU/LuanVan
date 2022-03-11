<?php
	if(isset($_GET['topic_id'])){
		$topic_id = $_GET['topic_id'];
	}else{
		$topic_id = '';
	}
?>

<div class="home_forum">
	<div class="grid__row">
		<!--=============== TITLE ===============-->
		<div class="grid__column-12">
			<h1 class="home__forum-title">
				Mathematics FORUM
			</h1>
		</div>
	</div>
	<div class="grid__row">
		<div class="grid__column-12">
			<div class="topic__detail">

				<!--=============== TOPIC TITLE ===============-->
				<div class="topic__detail_title">
					<span class="forum__topics_title">
					<?php
						$sql_get_topic = mysqli_query($con, "select * from topic where TopicID = '".$topic_id."'");
						$sql_row_topic = mysqli_fetch_array($sql_get_topic);
						$topicName = $sql_row_topic["TopicName"];
						echo $topicName;
						$date = strtotime($sql_row_topic["AskedDate"]);
						$date_format = date('d/m/Y', $date);
					?>
					</span>
				</div>
				<div class="topic__detail_info">
					<div class="topics_info-data">
						TopicID: <span id="topicID"><?php echo $sql_row_topic["TopicID"] ?></span>
						Asked: <span><?php echo $date_format ?></span>
						Viewed: <span><?php echo $sql_row_topic["Viewed"] ?></span> lần
					</div>
				</div>

				<!--=============== TOPIC CONTENT ===============-->
				<div class="topic__detail_content">
					<div class="topic_info-header">
						<div class="topic_info-author">
							<span>
							<?php
								$sql_get_username = mysqli_query($con, "select RealName from user where UserID = '".$sql_row_topic["UserID"]."'");
								$sql_row_username = mysqli_fetch_array($sql_get_username);
								$userName = $sql_row_username["RealName"];
								echo $userName;
							?>
							</span>
						</div>
						<div class="detail_comment-option">
							<?php 

								$sql_get_userlike_topic = mysqli_query($con, "select count(UserID) AS count from user_like_topic where TopicID = '".$topic_id."'");
								$sql_row_userlike_topic = mysqli_fetch_array($sql_get_userlike_topic);

								$sql_get_user_id = mysqli_query($con, "select UserID from user where UserName ='".$_SESSION['LVLogin']."'");
								$sql_row_user_id = mysqli_fetch_array($sql_get_user_id);

								$sql_get_user_liked = mysqli_query($con, "select * from user_like_topic where UserID='".$sql_row_user_id["UserID"]."' and TopicID='".$topic_id."'");
							?>

							<?php 
								if($sql_row_user_liked = mysqli_fetch_array($sql_get_user_liked)){
							?>
							<i class="far fa-thumbs-up detail_option-icon icon--liked" onclick="toggleTopicLike(<?php echo $sql_row_topic["TopicID"] ?>, 'remove')">
							<?php 
								}else{
							?>
							<i class="far fa-thumbs-up detail_option-icon icon--like" onclick="toggleTopicLike(<?php echo $sql_row_topic["TopicID"] ?>, 'add')">
							<?php
								}
							?>
								<?php
									echo $sql_row_userlike_topic["count"];
								?>
							</i>
							<i class="fas fa-trash-alt detail_option-icon"></i>
						</div>
					</div>
					<p>
						<?php
							echo $sql_row_topic["Content"];
						?>
					</p>
				</div>

				<!--=============== TOPIC COMMENT ===============-->
				<?php
					$comment_count = 0;
					$sql_get_comment_count = mysqli_query($con, "select count(CommentID) as count from topic_comment where TopicID='".$topic_id."'");
					$sql_row_comment_count = mysqli_fetch_array($sql_get_comment_count);
					if($sql_row_comment_count["count"] > 0)
						$comment_count = $sql_row_comment_count["count"];

					$sql_get_comment = mysqli_query($con, "select * from topic_comment where TopicID = '".$topic_id."'");
				?>
				<div class="topic__detail_bottom">
					<div class="detail_bottom-title">
						<?php echo $comment_count ?> Câu trả lời
					</div>
					<!--=============== TOPIC COMMENT 1 ===============-->
					<?php
						while($sql_row_comment = mysqli_fetch_array($sql_get_comment)){
					?>
					<div class="topic__detail_content">
						<div class="topic_info-header">
							<div class="topic_info-author">
								<span>
									<?php
										$sql_get_usercomment = mysqli_query($con, "select RealName from user where UserID = '".$sql_row_comment["UserID"]."'");
										$sql_row_usercomment = mysqli_fetch_array($sql_get_usercomment);
										echo $sql_row_usercomment["RealName"];
									?>
								</span>
							</div>
							<div class="detail_comment-option">
								<?php 
									$sql_get_userlike_comment = mysqli_query($con, "select count(UserID) AS count from user_like_comment where CommentID = '".$sql_row_comment["CommentID"]."'");
									$sql_row_userlike_comment = mysqli_fetch_array($sql_get_userlike_comment);

									$sql_get_user_id = mysqli_query($con, "select UserID from user where UserName ='".$_SESSION['LVLogin']."'");
									$sql_row_user_id = mysqli_fetch_array($sql_get_user_id);

									$sql_get_user_liked = mysqli_query($con, "select * from user_like_comment where UserID='".$sql_row_user_id["UserID"]."' and CommentID='".$sql_row_comment["CommentID"]."'");
									
								?>
								
								<?php 
									if($sql_row_user_liked = mysqli_fetch_array($sql_get_user_liked)){
								?>
								<i class="far fa-thumbs-up detail_option-icon icon--liked" onclick="toggleCommentLike(<?php echo $sql_row_comment["CommentID"] ?>, 'remove')">
								<?php 
									}else{
								?>
								<i class="far fa-thumbs-up detail_option-icon icon--like" onclick="toggleCommentLike(<?php echo $sql_row_comment["CommentID"] ?>, 'add')">
								<?php
									}
								?>
									<?php
										echo $sql_row_userlike_comment["count"];
									?>
								</i>
								<i class="fas fa-trash-alt detail_option-icon"></i>
							</div>
						</div>
						<p>
							<?php
								echo $sql_row_comment["Comment"];
							?>
						</p>
					</div>
					<?php
						}
					?>

					<div class="topic__detail_comment">
						<span class="topic__detail_comment-title">
							Nhập câu trả lời của bạn:
						</span>
						<textarea class="detail_comment-input" id="detail_comment-input"></textarea>
						<div class="detail_comment-post" id="detail_comment-btnsend">
							Gửi câu trả lời
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>