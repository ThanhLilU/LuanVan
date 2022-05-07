<?php
	include("../db/connect.php");

	$user_name = $_GET['user_name'];
    $comment_id = $_GET['comment_id'];
    
    // echo $user_name;
    // echo $comment_id;

    $sql_get_user_id = mysqli_query($con, "select UserID from user where UserName = '".$user_name."'");
    $sql_row_user_id = mysqli_fetch_array($sql_get_user_id);

    $user_id = $sql_row_user_id["UserID"];
    // echo $user_id;

    if($user_id == 1){
        $sql_remove_comment = "DELETE FROM topic_comment WHERE CommentID = '$comment_id'";
        $sql_remove_like_comment = "DELETE FROM user_like_comment WHERE CommentID = '$comment_id'";

        // echo $sql_remove_comment;

        $sql_remove_like = mysqli_query($con, $sql_remove_like_comment);

        if($sql_remove_like){
            $sql_remove = mysqli_query($con, $sql_remove_comment);

            if($sql_remove){
                echo 'true';
            }else{
                echo 'false';
            }
        }
    }else{
        $sql_get_user_comment = mysqli_query($con, "SELECT * FROM topic_comment WHERE CommentID='$comment_id' and UserID='$user_id'");

        $row_get_user_comment = mysqli_fetch_array($sql_get_user_comment);
        
        if($row_get_user_comment["CommentID"]){
            $sql_remove_comment = "DELETE FROM topic_comment WHERE CommentID = '$comment_id' and UserID='$user_id'";
            $sql_remove_like_comment = "DELETE FROM user_like_comment WHERE CommentID = '$comment_id'";

            // echo $sql_remove_comment;

            $sql_remove_like = mysqli_query($con, $sql_remove_like_comment);

            if($sql_remove_like){
                $sql_remove = mysqli_query($con, $sql_remove_comment);

                if($sql_remove){
                    echo 'true';
                }else{
                    echo 'false';
                }
            }
        }else{
            echo 'not own';
        }
    }
?>