<?php
	include("../db/connect.php");

	$user_name = $_GET['user_name'];
    $comment_id = $_GET['comment_id'];
    $likeStatus = $_GET['status'];

    // echo $user_name;
    // echo $comment_id;

    $sql_get_user_id = mysqli_query($con, "select UserID from user where UserName = '".$user_name."'");
    $sql_row_user_id = mysqli_fetch_array($sql_get_user_id);

    $user_id = $sql_row_user_id["UserID"];
    // echo $user_id;

    if($likeStatus == "remove"){
        $sql_remove_like = "delete from user_like_comment where UserID='".$user_id."' and CommentID='".$comment_id."'";

        // echo $sql_remove_like;

        $sql_remove = mysqli_query($con, $sql_remove_like);

        if($sql_remove){
        	echo 'true';
        }else{
        	echo 'false';
        }
    }else if($likeStatus == "add"){
        $sql_add_like = "INSERT INTO user_like_comment(UserID, CommentID) VALUE('".$user_id."', '".$comment_id."');";

        // echo $sql_add_like;

        $sql_add = mysqli_query($con, $sql_add_like);

        if($sql_add){
            echo 'true';
        }else{
            echo 'false';
        }
    }
?>