<?php
	if(isset($_GET['danhmuc'])){
		$danhmuc = $_GET['danhmuc'];
		$sql_get_topic_category = mysqli_query($con, "select * from topic_category where CategoryID='".$danhmuc."'");
	}else{
		$danhmuc = '';
		$sql_get_topic_category = mysqli_query($con, "select * from topic_category");
	}

	if(isset($_GET['search'])){
		$search = str_replace('%20', ' ', $_GET['search']);
		$sql_get_topic_category = mysqli_query($con, "select c.CategoryID, c.CategoryName from topic_category c, topic t WHERE t.TopicName like '%".$search."%' and c.CategoryID = t.CategoryID");
	}else{
		$search = "";
	}

	if(isset($_GET['page'])){
		$page = $_GET['page'];
	}else{
		$page = 1;
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
		<?php
			include("include/home_menu.php");
		?>
		<div class="grid__column-9 content--responsive" id="forum-content-wrapper">

			<?php
				include("include/search_engine.php");
			?>

			<!--=============== TOPIC 1 ===============-->
			<?php
				while($sql_row_topic_category = mysqli_fetch_array($sql_get_topic_category)){
					$pageLimit = ($page - 1) * 3;
					$sql_get_topic_list = mysqli_query($con, "select * from topic where CategoryID = '".$sql_row_topic_category["CategoryID"]."' LIMIT 3 OFFSET ".$pageLimit);

					if(isset($_GET['search'])){
						$sql_get_topic_list = mysqli_query($con, "select * from topic where CategoryID = '".$sql_row_topic_category["CategoryID"]."' and TopicName like '%".$search."%' GROUP BY TopicID");
					}
			?>
			<div class="forum__topics topics__close" id="<?php echo $sql_row_topic_category["CategoryID"] ?>">
				<div class="forum__topics_header">
					<span class="forum__topics_title"><?php echo $sql_row_topic_category["CategoryName"] ?></span>
					<div class="forum__topics_more">
						<h3 class="forum__topics_more-label">Xem Thêm</h3>
						<i class="fas fa-arrow-down forum__topics_more-icons"></i>
					</div>
				</div>

				<div class="topics__list">
					<?php
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
					?>

					<div class="pagination-wrapper">
						<div class="pagination-decrease pagination-icon pagination--smaller" id="pagination-smaller">
							<i class="fas fa-angle-left"></i>
						</div>
						<div class="pagination--input-wrapper">
							<div class="pagination--input">
								<?php
									echo $page;
								?>
							</div>
						</div>
						<div class="pagination-increase pagination-icon pagination--bigger" id="pagination-bigger">
							<i class="fas fa-angle-right"></i>
						</div>
					</div>
				</div>
			</div>
			<?php
				}
			?>
			<div class="topics__option">
				<span class="topics__option-label" id="add-topic--toggle">Thêm câu hỏi</span>
			</div>
		</div>
	</div>
</div>

<div class="modal" id="addModal">
	<div class="modal__overlay" id="addModal-overlay"></div>
	<div class="modal__body modal_growth">
		<div class="modal__container">
			<div class="modal__header">
				<span>Thêm câu hỏi của bạn</span>
			</div>
			<div class="modal__topic_category">
				<select name="" id="add_question_category">
					<?php 
						$sql_get_topic_category = mysqli_query($con, "select * from topic_category");
						while($sql_row_topic_category = mysqli_fetch_array($sql_get_topic_category)){
					?>
					<option value="<?php echo $sql_row_topic_category["CategoryID"] ?>">
						<?php echo $sql_row_topic_category["CategoryName"] ?>
					</option>
					<?php
						}
					?>
				</select>
			</div>
			<div class="modal__title">
				<input type="text" placeholder="Tiêu đề câu hỏi" id="add_question_title" required>
			</div>
			<div class="modal__content">
				<textarea placeholder="Nội dung câu hỏi của bạn" id="add_question_content" required></textarea>
			</div>
			<div class="modal__option button-right">
				<button class=" button button--white" id="addModal--back">
					Trở lại
				</button>
				<button class="button" id="btn_add_question">
					Đăng câu hỏi
				</button>
			</div>
		</div>
	</div>
</div>