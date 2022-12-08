<?php
include 'dbconnect';
include 'users.php';

$UserName = $_POST['uname'];
$Password = $_POST['password'];

if (isset($_POST['uname']) && isset($_POST['password'])) { 
    if ($UserName == "") {
        header("Location: ../index.php?error=Username is required");
        exit();

    }else if($Password==""){
    
        header("Location: ../index.php?error=Password is required");
        exit();

    }else{
        $user = new User($conn, $UserName, $Password);
        if($user -> Exists()==1){
            $_SESSION['user_name'] = $user->name;
            $_SESSION['password'] = $user->password;
            $_SESSION['email'] = $user->email;
            header("Location: ../home.php");
        }
        else {
            header("Location: ../index.php");
            echo "wrong password";
        }
    }

}
else{
    echo "HELLO WORLD";
}


