<!--==================== QUIZ FOR KIDS ====================-->
<div class="quiz__container">
	<div class="grid__row">
		<div class="grid__column-12">
			<div class="quiz__wrapper">
				<div class="quiz__title">
					<h1>BeU</h1>
					<h1>For</h1>
					<h1>IQs</h1>
				</div>
				<div class="quiz__time">
					<div class="round__time-bar" id="timer-bar">
						<div id="timer-bar--inner"></div>
					</div>
					<span class="quiz__counter">
						<span id="quiz_count-right">0</span>/<span id="quiz_count-total">0</span>
					</span>
				</div>
				
				<div class="quiz__equation">
					<h1 id="quiz-num1">1</h1>
					<h1 id="quiz_mark">/</h1>
					<h1 id="quiz-num2">1</h1>
					<h1>=</h1>
					<h1>?</h1>
				</div>
				<div class="quiz__answer">
					<?php 
						if(isset($_GET['diff'])){
							$iqsDiff = $_GET['diff'];
						}else{
							$iqsDiff = '';
						}
						
						if($iqsDiff == 'hard'){
					?>
					<div class="quiz__answer-list">
						<input class="quiz__answer--input" type="number" id="quiz_answer-input">
						<div class="quiz__answer--button" id="quiz_answer-button">
							Xác nhận
						</div>
					</div>
					<script src="javascript/quiz_multiply_divide_hard.js"></script>
					<?php
						}else if($iqsDiff == 'easy'){
					?>
					<ul class="quiz__answer-list">
						<li class="quiz__answer--button" id="quiz_option-1">1</li>
						<li class="quiz__answer--button" id="quiz_option-2">2</li>
						<li class="quiz__answer--button" id="quiz_option-3">3</li>
						<li class="quiz__answer--button" id="quiz_option-4">4</li>
					</ul>
					<script src="javascript/quiz_multiply_divide_easy.js"></script>
					<?php
						}
					?>

					<?php
						if(isset($_GET['prac'])){
							$iqsPrac = $_GET['prac'];
						}else{
							$iqsPrac = '';
						}

						if($iqsPrac != '')
					?>
					<script>
						generate_equation(<?php echo $iqsPrac ?>);
					</script>
				</div>
			</div>
		</div>
	</div>
</div>
