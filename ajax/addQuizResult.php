<?php
	include("../db/connect.php");

	$prac = $_GET['prac'];
    $user_name = $_GET['user_name'];
    $right_answer = $_GET['right_answer'];

    // echo $prac;
    // echo $user_name;
    // echo $right_answer;

    if($prac == "true"){
        $time = $_GET['time'];
        // echo $time;
    }else if($prac == "false"){
        $total_count = $_GET['total_count'];
        // echo $total_count;
    }

    if($prac == "true"){
        $sql_add_rank = "INSERT INTO quiz_rank_prac(UserName, RightAnswer, QuizTime) VALUE ('$user_name', '$right_answer', '$time');";
        
        // echo $sql_add_rank;
    }else if($prac == "false"){
        $sql_add_rank = "INSERT INTO quiz_rank_test(UserName, RightAnswer, TotalCount) VALUE ('$user_name', '$right_answer', '$total_count');";
        
        // echo $sql_add_rank;
    }

    $sql_add = mysqli_query($con, $sql_add_rank);

    if($sql_add){
    	echo 'true';
    }else{
    	echo 'false';
    }
?>