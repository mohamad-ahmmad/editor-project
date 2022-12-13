<?php
class User{
public $name;
public $email;
public $type;
public $password;
public $db;

function __construct($db, $useremail, $password){
  $this->email=$useremail;
  $this->password=$password;
  $this->db=$db;
}


function set_email($email) {
    $this->email = $email;
}
  function get_email() {
    return $this->email;
}
function set_type($type) {
    $this->type = $type;
}
  function get_type() {
    return $this->type;
}
function set_name($name) {
    $this->name = $name;
}
  function get_name() {
    return $this->name;
}
function set_password($password) {
    $this->password = $password;
}
  function get_password() {
    return $this->password;
}
function set_db($db) {
    $this->db = $db;
}
  function get_db() {
    return $this->db;
}

function Exists(){
    
    $sql = "SELECT * FROM members";
    $result = ($this->db)->query($sql);
    if ($result->num_rows > 0){
       
    while($row = $result->fetch_assoc()) {
    if ( $row["email"] == $this->email &&  $row["Password"] == $this->password && $row["Type"]!="admin")
    {
       $this->type = $row["type"];
       $this->name = $row["Username"];
        return 1;
    }
    else if ( $row["email"] == $this->email &&  $row["Password"] == $this->password && $row["Type"]=="admin")
    {
       $this->type = $row["type"];
       $this->name = $row["Username"];
        return 2;
    }
    }     
}
    
return 0;
}
function emailExists(){
  $sql = "SELECT * FROM members";
    $result = ($this->db)->query($sql);
    if ($result->num_rows > 0){
       
    while($row = $result->fetch_assoc()) {
    if ( $row["email"] == $this->email)
    {
        return 1;
    }
    else   if ( $row["Username"] == $this->name)
    {
        return 2;
    }

    }     
}
    
return 0;

}
function insertUser(){
  $sql = "INSERT INTO `members`(`email`, `Username`, `Password`, `Type`) VALUES ('".$this->email."','".$this->name."','".$this->password."','member')";
  $result = ($this->db)->query($sql);
return;

}

}


