<?php
	include("../db/connect.php");

	$user_name = $_GET['user_name'];
    $topic_id = $_GET['topic_id'];
    $comment = $_GET['comment'];
    
    // echo $user_name;
    // echo $topic_id;
    // echo $comment;

    $sql_get_user_id = mysqli_query($con, "select UserID from user where UserName = '".$user_name."'");
    $sql_row_user_id = mysqli_fetch_array($sql_get_user_id);

    $user_id = $sql_row_user_id["UserID"];
    // echo $user_id;

    $sql_add_comment = "INSERT INTO topic_comment(UserID, TopicID, Comment) VALUE ('$user_id', '$topic_id', '$comment');";

    // echo $sql_add_comment;

    $sql_add = mysqli_query($con, $sql_add_comment);

    if($sql_add){
    	echo 'true';
    }else{
    	echo 'false';
    }
?>