<?php
	if(isset($_GET['danhmuc'])){
		$danhmuc = $_GET['danhmuc'];
		$sql_get_beutopic_list = mysqli_query($con, "SELECT * from beutopic WHERE CategoryID='".$danhmuc."'");
	}else{
		$danhmuc = '';
		$sql_get_beutopic_list = mysqli_query($con, "SELECT * from beutopic");
	}

	if(isset($_GET['search'])){
		$search = str_replace('%20', ' ', $_GET['search']);
		$sql_get_beutopic_list = mysqli_query($con, "SELECT * FROM beutopic WHERE TopicTitle LIKE '%".$search."%'");
	}else{
		$search = "";
	}
?>

<!--==================== HOME CONTENT ====================-->
<div class="home__content">
	<div class="grid__row app__content">
		<?php
			include("include/home_menu.php");
		?>
		<div class="grid__column-9 content--responsive" id="math-content-wrapper">
			<?php
				include("include/search_engine.php");
			?>
			<div class="grid__row">
				<?php
					while($row_get_beutopic_list = mysqli_fetch_array($sql_get_beutopic_list)){
				?>
				<div class="grid__column-4">
					<div class="home__content-wrapper">
						<a href="?beutopic=<?php echo $row_get_beutopic_list["TopicID"] ?>" class="home__content-link">
							<div class="home__content-img" style="background-image: url(./assets/img/<?php echo $row_get_beutopic_list["TopicImg"]?>);">
							</div>
							<div class="home__content-title-wrapper">
								<h4 class="home__content-title"><?php echo $row_get_beutopic_list["TopicTitle"] ?></h4>
							</div>
						</a>
					</div>
				</div>
				<?php
					}
				?>
			</div>
		</div>
	</div>
</div>