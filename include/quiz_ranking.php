<!--==================== QUIZ FOR IQS ====================-->
<div class="quiz__container">
	<div class="grid__row">
		<div class="grid__column-12">
			<div class="quiz__wrapper">
				<div class="quiz__title">
					<h1>Bảng</h1>
					<h1>Xếp</h1>
					<h1>Hạng</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="grid__row">
		<div class="grid__column-6">
			<div class="quiz__rank--wrapper">
				<span class="quiz__subtitle">Thực hành</span>

				<div class="grid__column-12">
					<div class="grid__row">
						<div class="quiz__rank-stt">
							<span class="quiz__rank-title mb3-separate">STT</span>
						</div>
						<div class="quiz__rank-name">
							<span class="quiz__rank-title mb3-separate">Tên</span>
						</div>
						<div class="quiz__rank-right">
							<span class="quiz__rank-title mb3-separate">Đúng</span>
						</div>
						<div class="quiz__rank-other">
							<span class="quiz__rank-title">Thời gian</span>
						</div>
					</div>
				</div>
				<div class="grid__column-12">
					<?php
						$sql_get_prac_list = mysqli_query($con, "select * from quiz_rank_prac order by RightAnswer DESC, QuizTime ASC limit 10");

						$stt = 0;
						while ($sql_row_prac_list = mysqli_fetch_array($sql_get_prac_list)) {
							$stt++;
					?>
					<div class="grid__row">
						<div class="quiz__user-rank">
							<div class="quiz__rank-stt quiz__prac-stt">
								<span class="quiz__rank-label"><?php echo $stt ?></span>
							</div>
							<div class="quiz__rank-name">
								<span class="quiz__rank-label"><?php echo $sql_row_prac_list["UserName"] ?></span>
							</div>
							<div class="quiz__rank-right">
								<span class="quiz__rank-label"><?php echo $sql_row_prac_list["RightAnswer"] ?></span>
							</div>
							<div class="quiz__rank-other">
								<span class="quiz__rank-label"><?php echo $sql_row_prac_list["QuizTime"]/10 ?> s</span>
							</div>
						</div>
					</div>
					<?php
						}
					?>
					
					<div class="grid__row">
						<div class="quiz__user-rank">
							<div class="quiz__rank-stt">
								<span class="quiz__rank-label">...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="grid__column-6">
			<div class="quiz__rank--wrapper">
				<span class="quiz__subtitle">Kiểm tra</span>

				<div class="grid__column-12">
					<div class="grid__row">
						<div class="quiz__rank-stt">
							<span class="quiz__rank-title mb3-separate">STT</span>
						</div>
						<div class="quiz__rank-name">
							<span class="quiz__rank-title mb3-separate">Tên</span>
						</div>
						<div class="quiz__rank-right">
							<span class="quiz__rank-title mb3-separate">Đúng</span>
						</div>
						<div class="quiz__rank-other">
							<span class="quiz__rank-title">Tổng</span>
						</div>
					</div>
				</div>
				<div class="grid__column-12">
					<?php
						$sql_get_test_list = mysqli_query($con, "select * from quiz_rank_test order by RightAnswer DESC, TotalCount ASC limit 10");

						$stt = 0;
						while ($sql_row_test_list = mysqli_fetch_array($sql_get_test_list)) {
							$stt++;
					?>
					<div class="grid__row">
						<div class="quiz__user-rank">
							<div class="quiz__rank-stt quiz__test-stt">
								<span class="quiz__rank-label"><?php echo $stt ?></span>
							</div>
							<div class="quiz__rank-name">
								<span class="quiz__rank-label"><?php echo $sql_row_test_list["UserName"] ?></span>
							</div>
							<div class="quiz__rank-right">
								<span class="quiz__rank-label"><?php echo $sql_row_test_list["RightAnswer"] ?></span>
							</div>
							<div class="quiz__rank-other">
								<span class="quiz__rank-label"><?php echo $sql_row_test_list["TotalCount"] ?></span>
							</div>
						</div>
					</div>
					<?php
						}
					?>
					
					<div class="grid__row">
						<div class="quiz__user-rank">
							<div class="quiz__rank-stt">
								<span class="quiz__rank-label">...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>