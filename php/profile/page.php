<?php
session_start();

if (!isset($_SESSION['user_name'])) {
  header("LOCATION: ../index.php");
}

//DB Connection Ouput $conn<MySqli>
require_once("../backend/dbconnect.php");
//PROCCESSING REQUESTS ADD / EDIT / DELETE
if (isset($_REQUEST['source'])) {
  $source = $_REQUEST['source'];

  switch ($source) {
    case "add":
      require_once("../backend/user-profile/add-project.php");
      break;
    case "edit":
      require_once("../backend/user-profile/edit-project.php");
      break;
    case "delete":
      require_once("../backend/user-profile/delete-project.php");
      break;
  }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../assets/style.c8400453.css" />
  <link rel="stylesheet" href="../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style.c8400450.css" />

  <title>Code Editor | Profile</title>
</head>

<body class="profile-bdy">
  <div class="container">
    <div class="mt-3 d-flex border-bottom justify-content-between">
      <div class="d-flex">
        <h1>
          <span><i class="fa-solid fa-user"></i></span>
        </h1>
        <h1 class="mx-3">Profile</h1>
      </div>
      <div class="align-self-center">
        <img width="300px" class="img-fluid" src="../imgs/logo-white.png" />
      </div>
    </div>
    <div class="mt-5 d-flex justify-content-around">
      <div class="profile ms-3">
        <div class="mb-3">
          <h3 class="text-white m-0">Username:</h3>
          <p>&nbsp;Name</p>
        </div>
        <h3 class="text-white m-0">Email:</h3>
        <p>&nbsp;example@gmail.com</p>
      </div>
      <div class="lang-list-done">
        <ul class="list-unstyled">
          <li>
            <h3 class="text-white">Languages</h3>
          </li>
          <li>Python</li>
          <li>Javascript</li>
          <li>C++</li>
          <li>Rust</li>
        </ul>
      </div>
    </div>
    <div class="projects">
      <h3 class="border-bottom mb-4 pb-2">
        <i class="fa-solid fa-folder"></i>&nbsp; Projects
      </h3>
      <div class="projects--body">
        <div class="row">
          <div class="col-8">
            <!-- CARD Container                       -->

            <?php include_once("../backend/user-profile/load-projects.php"); ?>

          
          </div>
          <!-- END OF CARD Container                        -->

          <div class="col-4">
            <div class="">Sticky Status</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="font-size: 2rem; width: 3rem; height: 3rem" class="hover-btn rounded-pill bg-primary border-0 text-white fw-semibold position-fixed m-3 me-5 bottom-0 end-0">
    +
  </button>

  <!-- Modals         --  - - - -- - --  -->
  <!-- Delete ------------------------------------------------------- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog text-black">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Deleting Project
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">Are you sure do you want to delete it ?</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <a id="project-delete-btn" type="button" class="btn btn-danger">Delete</a>
        </div>
      </div>
    </div>
  </div>
  <!-- END OF --=> Delete ------------------------------------------------------- Modal -->

  <!-- Add/Edit Project Modal                      -->
  <div class="modal fade text-black" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Add Project
          </h1>
          <button id="close-btn-edit-add" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- DATA FORM           - - -- - - - --                           -->

          <form action="page.php" method="POST">
            <div class="mb-3">
              <label for="project" class="form-label">Project Name</label>
              <input name="project-name" class="form-control" id="project" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="txtarea1" class="form-label">Project Bio's</label>
              <textarea name="project-bio" class="form-control" id="txtarea1" style="height: 100px"></textarea>
            </div>
            <input id="project-id" name="project-id" value="0" type="text" hidden>
            <input id="req_type" type="text" name="source" value="add" hidden>
            <div class="mb-4">
              <label for="disabledSelect" class="form-label">Choose Language</label>
              <select name="project-lang" id="disabledSelect" class="form-select">
                <option value="js">Javascript</option>
                <option value="py">Python</option>
              </select>
            </div>
            <input id="add-edit" type="submit" class="btn btn-primary" value="Submit" />
          </form>
          <!-- END OF DATA FORM           - - -- - - - --                           -->
        </div>
      </div>
    </div>
  </div>
  <!-- END OF ----===>> Add/Edit Project Modal                      -->
  <!-- NOTIFICATION  - - - --- - - -- - - - - --- - - -  -->

  <!-- Button trigger modal -->
  <button hidden id="notifiy-btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
    .
  </button>

  <!-- Modal -->
  <div class="modal fade text-black" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel"><?php echo $res[1] ?></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Okey</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    <?php if (isset($res)) { ?>
      document.getElementById("notifiy-btn").click();
    <?php } ?>
  </script>
  <script src="profile-script.js"></script>
</body>

</html>
<?php
$conn->close();
?>