<?php
include 'dbconnect';
include 'users.php';

$Email = $_POST['Email'];
$Password = $_POST['password'];

if (isset($_POST['Email']) && isset($_POST['password'])) { 
    if ($UserName == "") {
        header("Location: ../index.php?error=Username is required");
        exit();

    }else if($Password==""){
    
        header("Location: ../index.php?error=Password is required");
        exit();

    }else{
        $user = new User($conn, $Email, $Password);
        if($user -> Exists()==1){
            session_start();
            $_SESSION['user_name'] = $user->name;
            $_SESSION['password'] = $user->password;
            $_SESSION['email'] = $user->email;
            header("Location: /editor-project/php/code-editor/index.php");
        }
        else {
            header("Location: ./index.php");
            echo "wrong password";
        }
    }

}
else{
    header("Location: ../index.php?error=not Set");
        exit();
}


