


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Page</title>
  <script type="module" crossorigin src="assets/main.f9cce4db.js"></script>
  <link rel="stylesheet" href="assets/style.c8400453.css" />
</head>
<body>
<?php
include "../backend/dbconnect";

echo '
<div class="container-fluid">
<div class ="row"> 
<div class="col-md-3"> 
test
</div>
<div class = "col-md-6">
<table class="table table-dark">

<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Number of codes:</th>
    </tr>
  </thead>
    <tbody>
     
      ';
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
echo "<td>" . $number['data'] . "</td>";
echo "</tr>";
}
?>

    </tbody>
</table>
</div>
</div>

</div>

</body>
</html>