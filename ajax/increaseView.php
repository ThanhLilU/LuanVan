<?php
    include("../db/connect.php");

    $topic_id = $_GET['topicID'];
    // echo " topic: ".$topic_id;

    $sql_get_topic_view = mysqli_query($con, "select Viewed from topic where TopicID = '".$topic_id."'");
    $row_get_topic_view = mysqli_fetch_array($sql_get_topic_view);

    $current_view = $row_get_topic_view["Viewed"];
    // echo " current: ".$current_view;

    $new_view = $current_view + 1;
    // echo " new: ".$new_view;

    $sql_update_view = "UPDATE topic set Viewed = '".$new_view."' WHERE TopicID = '".$topic_id."'";

    // echo $sql_add_comment;

    $sql_update = mysqli_query($con, $sql_update_view);

    if($sql_update){
        echo 'true';
    }else{
        echo 'false';
    }
?>