<?php
    include("../db/connect.php");
    session_start();

    $loginName = $_GET['loginName'];
    $loginPass = $_GET['loginPass'];

    // echo $loginName;
    // echo $loginPass;

    $sql_get_user = mysqli_query($con, "select * from user where UserName='".$loginName."' and UserPassword='".$loginPass."'");
    if($sql_get_user){
        $sql_row_user = mysqli_fetch_array($sql_get_user);
        $userName = $sql_row_user["UserName"];
        echo $userName;
        $_SESSION['LVLogin'] = $userName;
    }else{
        echo 'false';
    }
?>