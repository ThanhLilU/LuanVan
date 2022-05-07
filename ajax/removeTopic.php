<?php
	include("../db/connect.php");

	$user_name = $_GET['user_name'];
    $topic_id = $_GET['topic_id'];
    
    // echo $user_name;
    // echo $topic_id;

    $sql_get_user_id = mysqli_query($con, "select UserID from user where UserName = '".$user_name."'");
    $sql_row_user_id = mysqli_fetch_array($sql_get_user_id);

    $user_id = $sql_row_user_id["UserID"];
    // echo $user_id;


    $sql_remove_tp_like = "DELETE FROM user_like_topic WHERE TopicID = '$topic_id'";
    $sql_remove_cmt_like = "DELETE FROM user_like_comment WHERE CommentID IN (SELECT c.CommentID FROM topic_comment c, user_like_comment l where c.TopicID = '$topic_id' GROUP BY c.CommentID)";
    $sql_remove_comment = "DELETE FROM topic_comment WHERE TopicID = '$topic_id'";

    if($user_id == 1){
        $sql_remove_topic = "DELETE FROM topic WHERE TopicID = '$topic_id'";

        // echo $sql_remove_topic;

        $sql_remove_tp_like = mysqli_query($con, $sql_remove_tp_like);
        $sql_remove_cmt_like = mysqli_query($con, $sql_remove_cmt_like);
        $sql_remove_cmt = mysqli_query($con, $sql_remove_comment);
        $sql_remove_tp = mysqli_query($con, $sql_remove_topic);

        if($sql_remove_tp_like && $sql_remove_cmt_like && $sql_remove_tp && $sql_remove_cmt){
            echo 'true';
        }else{
            echo 'false';
        }
    }else{
        $sql_get_user_topic = mysqli_query($con, "SELECT * FROM topic WHERE TopicID='$topic_id' and UserID='$user_id'");

        $row_get_user_topic = mysqli_fetch_array($sql_get_user_topic);
        
        if($row_get_user_topic["TopicID"]){
            $sql_remove_topic = "DELETE FROM topic WHERE TopicID = '$topic_id' and UserID='$user_id'";

            // echo $sql_remove_topic;
            $sql_remove_tp_like = mysqli_query($con, $sql_remove_tp_like);
            $sql_remove_cmt_like = mysqli_query($con, $sql_remove_cmt_like);
            $sql_remove_cmt = mysqli_query($con, $sql_remove_comment);
            $sql_remove_tp = mysqli_query($con, $sql_remove_topic);

            if($sql_remove_tp_like && $sql_remove_cmt_like && $sql_remove_tp && $sql_remove_cmt){
                echo 'true';
            }else{
                echo 'false';
            }
        }else{
            echo 'not own';
        }
    }
?>