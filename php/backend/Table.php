<?php

include "../backend/dbconnect";
$result = mysqli_query($conn,"SELECT * FROM members");
      $em = mysqli_fetch_array($result);

$result2 = mysqli_query($conn,"SELECT COUNT(ID) as data FROM codes where User_Email = '" .$em['email']."'");
$number = mysqli_fetch_array($result2);
mysqli_data_seek($result, 0);
$counter =1;

    while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<th scope=\"row\">".$counter."</th>";
$counter++;
echo "<td>" . $row['email'] . "</td>";
echo "<td>" . $row['Username'] . "</td>";
echo "<td>" . $row['Password'] . "</td>";
echo "<td>" . $number['data']. "</td>";
echo "</tr>";
}
?>