<?php
function cardLoader($projectId, $projectTitle, $projectBio,$lang)
{
     ?>
          <div class="card bg-transparent mb-3" style="border-color: rgba(255, 255, 255, 0.486)">
              <div class="row">
                <div class="col-4">
                  <img class="img-fluid" style="
                        opacity: 0.75;
                        filter: invert(100%) sepia(100%) saturate(0%)
                          hue-rotate(288deg) brightness(102%) contrast(102%);
                      " width="100%" src="../imgs/js-svgrepo-com.svg" alt="" />
                </div>
                <div class="col-8">
                  <div class="card-body position-relative">
                    <input type="text" name="project-id" value="<?php echo $projectId; ?>" hidden>
                 <h5 class="card-title fw-bolder fs-3">
                    <a href="../code-editor/index.php?lang=<?php echo $lang; ?>&project=<?php echo $projectId ?>">  <?php echo $projectTitle; ?></a> 
                    </h5>
                    <p class="card-text lead text-white fs-5">
                      <?php echo $projectBio; ?>
                    </p>
                    <!-- OPTION THREE DOTS        -->

                    <a data-bs-toggle="dropdown" role="button" aria-expanded="false" class="position-absolute p-2 mt-2 me-2 end-0 top-0">
                      <i id="option-dots" class="d-block fa-solid fa-ellipsis-vertical fa-lg p-1">
                      </i>
                    </a>

                    <ul class="dropdown-menu">
                      <li>
                        <a data-bs-toggle="modal" data-edit-project="<?php echo $projectId; ?>" data-bs-target="#staticBackdrop" class="dropdown-item" href="#">Edit</a>
                      </li>
                      <li>
                        <a data-bs-toggle="modal" data-id-project="<?php echo $projectId; ?>" data-bs-target="#exampleModal" class="dropdown-item">Delete</a>
                      </li>
                    </ul>

                    <!-- END OF OPTION THREE DOTS        -->
                  </div>
                </div>
              </div>
            </div>
    <?php 
    
}
$user_email = $_SESSION['email'];

$sql = "SELECT * FROM codes WHERE user_email='$user_email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    cardLoader($row['ID'],$row['proj_name'],$row['project_bio'], $row['extention']);
  }
}else{

}