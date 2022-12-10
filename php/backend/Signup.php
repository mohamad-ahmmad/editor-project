<?php
include 'dbconnect';
include 'users.php';

$UserName = $_POST['username'];
$Password = $_POST['pass'];
$Email = $_POST['email'];

if (isset($_POST['email']) && isset($_POST['username']) && isset($_POST['pass']) ) { 
  if ($UserName == "") {
      header("Location: ../index.php?error=Username is required");
      exit();

  }else if($Password==""){
  
      header("Location: ../index.php?error=Password is required");
      exit();

  }else{
      $user = new User($conn, $Email, $Password);
      $user ->set_name($_POST['username']);
      if($user -> emailExists()==1){

        header("Location: /editor-project/php/index.php?error=Email Exists"); 
        
        exit();
        
      }
      else if($user -> emailExists()==2){
        header("Location: /editor-project/php/index.php?error=Username Exists"); 
        
        exit();
      }
      else {
        $user -> insertUser();
        session_start();
        $_SESSION['user_name'] = $user->name;
        $_SESSION['password'] = $user->password;
        $_SESSION['email'] = $user->email;
        header("Location: /editor-project/php/code-editor/index.php"); 
      }
  }

}
else{
  header("Location: ../index.php?error=not Set");
      exit();
}
