<?php
	if(isset($_GET['beutopic'])){
		$beutopic = $_GET['beutopic'];
	}else{
		$beutopic = '';
	}
	$sql_get_beutopic = mysqli_query($con, "SELECT * from beutopic where TopicID = '$beutopic'");
	$row_get_beutopic = mysqli_fetch_array($sql_get_beutopic);
?>

<div class="home__detail">
	<div class="grid__row">

		<!--=============== TITLE ===============-->
		<div class="grid__column-12">
			<h1 class="home__detail-title">
				<?php echo $row_get_beutopic['TopicTitle'] ?>
			</h1>
		</div>

		<!--=============== SUB-TITLE ===============-->
		<div class="grid__column-12">
			<div class="home__detail-subtitle">
				<p>
					<?php echo $row_get_beutopic['TopicSubTitle'] ?>
				</p>
			</div>
		</div>

		<!--=============== CANVA ===============-->
		<div class="grid__column-12">
			<div class="home__detail-canva" id="canva-wrapper">
				<?php
					$sql_get_beutopic_includes = mysqli_query($con, "SELECT * from beutopicinclude where TopicID='".$row_get_beutopic['TopicID']."'");
					while($row_get_beutopic_includes = mysqli_fetch_array($sql_get_beutopic_includes)){
				?>
				<script src="<?php echo $row_get_beutopic_includes["IncludeLink"] ?>"></script>
				<?php
					}
				?>
			</div>
		</div>

		<!--=============== CONTENT ===============-->
		<div class="grid__column-12">
			<div class="home__detail-content">
				<p><?php echo $row_get_beutopic['TopicContent'] ?></p>
			</div>
		</div>

		<!--=============== AUTHOR ===============-->
		<div class="grid__column-12">
			<span class="home__detail-author">
				<?php echo $row_get_beutopic['TopicAuthor'] ?>
			</span>
		</div>
	</div>
</div>