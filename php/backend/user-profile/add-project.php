<?php
$projName = $_POST['project-name'];
$projBio = $_POST['project-bio'];
$projLang = $_POST['project-lang'];
$userEmail = $_SESSION['email'];
$sql = "INSERT INTO codes (proj_name, project_bio, code,user_email, extention) VALUES ('$projName', '$projBio', '', '$userEmail', '$projLang' )";

$successQuery =  ($conn->query($sql));
$res = [$successQuery, $successQuery ? "Added Successfully" : "Failed To Add"];
