<?php
include "../backend/dbconnect";
include "../backend/users.php";
session_start();


if(!isset($_SESSION['user_name'])){
  header("Location: ../index.php");
}
$sql = "Select * from members where email ='".$_SESSION['email']."'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$name = $row['Username'];
$email= $_SESSION['email'];
$password= $_SESSION['password'];
if(isset($_GET['sourcee'])){
  if($_GET['sourcee']=="delete"){
  $sql = "Delete FROM members where Username='".$_GET['name']."'";
 $result = $conn->query($sql);
 header("Location: index.php");
  }
}
if(isset($_GET['sourcee'])){
  if($_GET['sourcee']=="edit"){
    echo "HELLO";
  $sql = "UPDATE members SET email = '".($_GET['email'])."', Password = '".$_GET['password']."', Username ='".$_GET['name']."'
  WHERE
 email= '".($_GET['em'])."'";
 
 $result = $conn->query($sql);

  }
  else if($_GET['sourcee']=="Change Name"){
    $sql = "Update members set Username ='$_GET[newname]'".  " where Username = '".$name."'";
  
   $result = $conn->query($sql);
   header("Location: index.php");
  }
  else if($_GET['sourcee']=="Change Pass"){
    $sql = "Update members set Password ='$_GET[newpass]'".  " where Username = '".$name."'";
  echo $sql;
   $result = $conn->query($sql);
   header("Location: index.php");
  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Page</title>
  <script type="module" crossorigin src="assets/main.f9cce4db.js"></script>
  <link rel="stylesheet" href="../assets/style.c8400453.css" />
  <link rel="stylesheet" href="../assets/admin-page.css" />
  <link
      rel="stylesheet"
      href="../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
    />
</head>
<body>

<button style="display:none;" id="mybtn" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
<button  style="display:none;" id="deletebtn" type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm"></button>
<button style="display:none;" id="passbtn" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
<button style="display:none;" id="namebtn" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal3">
</button>
<div class="container-fluid">


<div class="left-side">
  <div class="row c1">
    <div class="col-mid-12"><div style="margin: 0 auto;">
 <span class="left-side-text" style="margin: 10%; color:#fff;"><i class="fa-sharp fa-solid fa-user"></i> Welcome <?php echo $name ?></span>
</div></div>
<div class="row c2">
<div class="col-mid-12"><div style="margin: 0 auto;">
 <a href="index.php?src=change name&name=<?php echo  $_SESSION['user_name']; ?>" class="btn left-side-sub-text" style=" color:#dddf;"><i class="fa-sharp fa-solid fa-file-signature"></i> Change name</a>
</div></div>



<div class="row">
<div class="col-mid-12"><div>
 <a href="index.php?src=Change Pass&name=<?php echo  $_SESSION['user_name']; ?>" class="btn left-side-sub-text" style="position:absolute; color:#dddf;"><i class="fa-sharp fa-solid fa-key"></i> Change Password</a>
</div></div>
</div>
<div class="row c3">
<div class="col-mid-12"><div>
 <a href="../code-editor/index.php?<?php echo $_SESSION['user_name']; ?>" class="btn left-side-sub-text" style=" color:#dddf;">Go to editor <i class="fa-sharp fa-solid fa-arrow-right"></i></a>
</div></div></div>


<div style="margin-top: 400px; margin-left:40px" class="row c3">
<div  class="col-mid-12"><div>
 <a href="../index.php" class="btn btn-primary left-side-sub-text log-out-btn" ><i class="fa-sharp fa-solid fa-right-from-bracket"></i> Logout</a>
</div></div>
</div>


</div>
  </div>
</div>
<div class="container-fluid">
<div class="row text-center">
  <div class="col-mid-12">
  <span class="header-text">Users Information<span>
  </div>
</div>
</div>
<div class ="row"> 
<div class = "table-responsive">
<table class="table-responsive-md admin-table align-middle table  table-hover table-striped">
<thead class="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col"># of codes</th>
      <th scope="col">Edit/Delete</th>
    </tr>
  </thead>
    <tbody>
     
      <?php
      $result = mysqli_query($conn,"SELECT * FROM members");
      $em = mysqli_fetch_array($result);

$result2 = mysqli_query($conn,"SELECT COUNT(ID) as data FROM codes where User_Email = '" .$em['email']."'");
$number = mysqli_fetch_array($result2);
mysqli_data_seek($result, 0);
$counter =1;

    while($row = mysqli_fetch_array($result))
{
  if($row['Type']!="admin"){
echo "<tr>";
echo "<th scope=\"row\">".$counter."</th>";
$counter++;
echo "<td>" . $row['email'] . "</td>";
echo "<td>" . $row['Username'] . "</td>";
echo "<td>" . $row['Password'] . "</td>";
echo "<td>" . $number['data'] . "</td>";
?>
<td class="btn-td"> <a  href="index.php?name=<?php echo $row['Username']?>&pass=<?php echo $row['Password'] ?>&email=<?php echo $row['email'] ?>&source=edit" class="edit-btn btn btn-primary" > &#160; Edit &#160;</a>  <a class="btn btn-danger" href="index.php?name=<?php echo $row['Username'] ?>&source=delete">Delete</a> </td>
  <!-- POP UP modal -->

  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit user information</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action="index.php" method="get">
      <input type="hidden" id="custId" name="sourcee" value="edit">
      <input type="hidden" id="custId" name="em" value="<?php echo $_GET['email'] ?>">
      <div class="form-group row">
      <label for="inputName" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input  name="name" type="text" class="form-control" id="inputName" value="<?php echo $_GET['name'] ?>">
    </div>
  </div>
      <div class="form-group row">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input  name="email" type="email" class="form-control" id="inputEmail" value="<?php echo $_GET['email'] ?>">
    </div>
  </div>

  <div class="form-group row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input  name="password" type="password" class="form-control" id="inputPassword" value="<?php echo $_GET['pass'] ?>">
    </div>
  </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
        </form>
  </div>
    </div>
  </div>
</div>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content" style="padding: 20px; width:400px">
      <h1 style="margin-bottom:25px">Are you sure?</h1>
      <form action="index.php" method="get">
      <input type="hidden" id="custId" name="sourcee" value="delete">
      <input type="hidden" id="custId" name="name" value="<?php echo $_GET['name'];?>">
        <button type="submit" class="btn btn-primary" style="color:#fff; margin-bottom: 5px">Confirm</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </form>
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Change Username</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <form action="index.php" method="get" >
        
  <div class="form-group row">
  <label for="InputName2" class="col-sm-2 col-form-label">Name:</label>
    <div class="col-sm-10">
      <input name="newname" type="text" class="form-control" id="InputName2">
      <input type="hidden"  name="sourcee" value="Change Name">
      <input type="hidden"  name="user_name" value="<?php echo $_SESSION['user_name']; ?>">
    </div>
  </div>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</form>


<!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel3" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Change Password</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <form action="index.php" method="get" >
          
  <div class="form-group row">
  <label for="InputPass2" class="col-sm-2 col-form-label">Password:</label>
    <div class="col-sm-10">
      <input name="newpass" type="text" class="form-control" id="InputPass2">
      <input type="hidden"  name="sourcee" value="Change Pass">
      <input type="hidden"  name="user_name" value="<?php echo $_SESSION['user_name']; ?>">
    </div>
  </div>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</form>

<?php
echo "</tr>";
}
}

?>

  </tbody>
</table>
</div>
</div>

</div>


<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<?php
if(isset($_GET['source'])){
if ($_GET['source']=="edit") { ?>

<script type="text/javascript">
    $(document).ready(function() {
      $("#mybtn").trigger('click');
    });
</script>

<?php }
else if ($_GET['source']=="delete"){ ?>
<script type="text/javascript">
    $(document).ready(function() {
      $("#deletebtn").trigger('click');
    });
</script>
  <?php
} else {

    echo $_POST["name"];

} 

}?>

<?php
if(isset($_GET['src'])){
  if($_GET['src']=="change name"){
  ?>
<script type="text/javascript">
    $(document).ready(function() {
      $("#passbtn").trigger('click');
    });
</script>
<?php
  }
  else if ($_GET['src']=="Change Pass"){ ?>
<script type="text/javascript">
    $(document).ready(function() {
      $("#namebtn").trigger('click');
    });
</script>
  <?php 
}
}
?>
</body>
</html>