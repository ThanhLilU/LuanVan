<?php
    include("../db/connect.php");

    $user_Name = $_GET['userName'];
    $game_Name = $_GET['gameName'];
    $user_Score = $_GET['userScore'];

    $sql_get_game_id = mysqli_query($con, "select GameID from game where GameName= '$game_Name'");
    $row_get_game_id = mysqli_fetch_array($sql_get_game_id);

    $game_ID = $row_get_game_id['GameID'];

    $sql = "INSERT INTO gamescore(GameID, UserName, Score) VALUES('$game_ID', '$user_Name', '$user_Score')";

    // echo $sql;

    $sql_insert = mysqli_query($con, $sql);

    if($sql_insert){
        echo 'true';
    }else{
        echo 'false';
    }
?>