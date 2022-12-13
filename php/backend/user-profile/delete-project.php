<?php

$id = $_GET['id'];

$sql = "DELETE FROM codes WHERE id = $id";

$succes = $conn->query($sql);

$res = [$succes, $succes ? "Project Deleted Succesfully" : "Something Weird Happend"];
