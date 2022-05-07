<!--==================== GAME RANKING ====================-->
<div class="game__container">
	<div class="grid__row">
		<div class="grid__column-12">
			<div class="game__wrapper">
				<div class="game__title">
					<h1>Bảng</h1>
					<h1>Xếp</h1>
					<h1>Hạng</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="grid__row">
		<?php
			$sql_get_game_list = mysqli_query($con, "select * from game");
			while($row_get_game_list = mysqli_fetch_array($sql_get_game_list)){
		?>
		<div class="grid__column-6">
			<div class="game__rank--wrapper">
				<span class="game__subtitle">
					<?php 
						if($row_get_game_list["GameName"] == "Snake"){
							echo "Con rắn";
						}else if($row_get_game_list["GameName"] == "Pi in the Sky"){
							echo "Cơn mưa số Pi";
						}else{
							echo $row_get_game_list["GameName"]; 
						}
					?>
					</span>
				<div class="grid__column-12">
					<div class="grid__row">
						<div class="game__rank-stt">
							<span class="game__rank-title mb3-separate">STT</span>
						</div>
						<div class="game__rank-name">
							<span class="game__rank-title mb3-separate">Tên</span>
						</div>
						<div class="game__rank-score">
							<span class="game__rank-title">Điểm</span>
						</div>
					</div>
				</div>
				<div class="grid__column-12">
					<?php
						$sql_get_user_score = mysqli_query($con, "select * from gamescore where GameID = '".$row_get_game_list["GameID"]."' order by score DESC limit 10");

						$stt = 0;
						while ($sql_row_user_score = mysqli_fetch_array($sql_get_user_score)) {
							$stt++;
					?>
					<div class="grid__row">
						<div class="game__user-rank">
							<div class="game__rank-stt game__stt <?php if($stt == "1") echo "rank-first"; else if($stt == "2") echo "rank-second"; else if($stt == "3") echo "rank-third";?>">
								<span class="game__rank-label"><?php echo $stt ?></span>
							</div>
							<div class="game__rank-name">
								<span class="game__rank-label"><?php echo $sql_row_user_score["UserName"] ?></span>
							</div>
							<div class="game__rank-score">
								<span class="game__rank-label"><?php echo $sql_row_user_score["Score"] ?></span>
							</div>
						</div>
					</div>
					<?php
						}
					?>
					
					<div class="grid__row">
						<div class="game__user-rank">
							<div class="game__rank-stt">
								<span class="game__rank-label">...</span>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		<?php
			}
		?>
	</div>
</div>