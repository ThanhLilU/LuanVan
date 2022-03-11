<?php
	include("../db/connect.php");

	$user_name = $_GET['user_name'];
    $question_title = $_GET['question_title'];
    $question_content = $_GET['question_content'];
    $question_category = $_GET['question_category'];
    
    // echo $user_name;
    // echo $question_title;
    // echo $question_content;
    // echo $question_category;

    $sql_get_user_id = mysqli_query($con, "select UserID from user where UserName = '".$user_name."'");
    $sql_row_user_id = mysqli_fetch_array($sql_get_user_id);

    $user_id = $sql_row_user_id["UserID"];
    // echo $user_id;

    date_default_timezone_set("Asia/Ho_Chi_Minh");
    $today = date('Y-m-d');
    // echo $today;

    $sql_add_question = "INSERT INTO topic(TopicName, CategoryID, UserID, Content, AskedDate) VALUE ('$question_title', '$question_category', '$user_id', '$question_content', '$today');";
    
    // echo $sql_add_question;

    $sql_add = mysqli_query($con, $sql_add_question);

    if($sql_add){
    	echo 'true';
    }else{
    	echo 'false';
    }
?>