<?php
	include("../db/connect.php");

	$user_name = $_GET['user_name'];
    $topic_id = $_GET['topic_id'];
    $likeStatus = $_GET['status'];

    // echo $user_name;
    // echo $topic_id;

    $sql_get_user_id = mysqli_query($con, "select UserID from user where UserName = '".$user_name."'");
    $sql_row_user_id = mysqli_fetch_array($sql_get_user_id);

    $user_id = $sql_row_user_id["UserID"];
    // echo $user_id;

    if($likeStatus == "remove"){
        $sql_remove_like = "delete from user_like_topic where UserID='".$user_id."' and TopicID='".$topic_id."'";

        // echo $sql_remove_like;

        $sql_remove = mysqli_query($con, $sql_remove_like);

        if($sql_remove){
        	echo 'true';
        }else{
        	echo 'false';
        }
    }else if($likeStatus == "add"){
        $sql_add_like = "INSERT INTO user_like_topic(UserID, TopicID) VALUE('".$user_id."', '".$topic_id."');";

        // echo $sql_add_like;

        $sql_add = mysqli_query($con, $sql_add_like);

        if($sql_add){
            echo 'true';
        }else{
            echo 'false';
        }
    }
?>