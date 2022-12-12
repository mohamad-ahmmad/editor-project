<?php
$projName = $_POST['project-name'];
$projBio = $_POST['project-bio'];
$projLang = $_POST['project-lang'];
$userEmail = $_SESSION['email'];
$projID = $_POST['project-id'];

$sql = "UPDATE codes SET project_bio='$projBio', proj_name='$projName', extention='$projLang'  WHERE id = $projID";
$succes = $conn->query($sql);
$res = [$succes, $succes ? "Updated Successfully" : "Something Wrong Happend"];
