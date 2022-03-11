<?php
    include("../db/connect.php");
    session_start();

    $regisRealName = $_GET['regisRealName'];
    $regisUserName = $_GET['regisUserName'];
    $regisPass = $_GET['regisPass'];

    // echo $loginName;
    // echo $loginPass;

    $sql = "INSERT INTO user(UserType, UserName, RealName, UserPassword) VALUES ('2', '$regisUserName', '$regisRealName', '$regisPass');";

    $sql_insert = mysqli_query($con, $sql);

    if($sql_insert){
        echo $regisUserName;
        $_SESSION['LVLogin'] = $regisUserName;
    }else{
        echo 'false';
    }
?>