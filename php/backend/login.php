<?php
include 'dbconnect.php';
include 'users.php';

$Email = $_POST['Email'];
$Password = $_POST['password'];



if(!empty($_POST["remember"])) {
	setcookie ("username",$_POST["Email"],time()+ 3600, "/");
	setcookie ("password",$_POST["password"],time()+ 3600,"/");
} else {
    setcookie("username", "", time() - 3600, "/");
    setcookie("password", "", time() - 3600, "/");
}



if (isset($_POST['Email']) && isset($_POST['password'])) {
    if ($Email == "") {
        header("Location: ../index.php?error=Username is required");
        exit();
    } else if ($Password == "") {

        header("Location: ../index.php?error=Password is required");
        exit();
    } else {
        $user = new User($conn, $Email, $Password);
        if ($user->Exists() == 1) {
            session_start();
            $_SESSION['user_name'] = $user->name;
            $_SESSION['password'] = $user->password;
            $_SESSION['email'] = $user->email;
           
            header("Location: /editor-project/php/code-editor/index.php?" .$user->name);
        }
        else if($user -> Exists()==2){
            session_start();
            $_SESSION['user_name'] = $user->name;
            $_SESSION['password'] = $user->password;
            $_SESSION['email'] = $user->email;
           
            header("Location: /editor-project/php/admin-page/index.php?" .$user->name);
        }
        else {
            header("Location: /editor-project/php/index.php?error=Wrong Password");

            exit();
        }
    }
} else {
    header("Location: ../index.php?error=not Set");
    exit();
}
