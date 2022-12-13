<?php
session_start();
require_once("../backend/dbconnect.php");
if (!isset($_SESSION['user_name'])) {
  header("LOCATION: ../index.php");
}
if (!isset($_GET['lang']) && !isset($_GET['project']) && empty($_GET['project']) && empty($_GET['lang'])) {
  header("LOCATION : ../profile/page.php?id=" + $_GET["user_name"]);
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Code Editor</title>
  <script type="module" crossorigin src="../assets/codeEditor.3a43f70e.js"></script>
  <link rel="stylesheet" href="../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" />
  <link rel="modulepreload" crossorigin href="../assets/index.01827639.js" />
  <link rel="stylesheet" href="../assets/style.c8400453.css" />
</head>
<?php

$user_email = $_SESSION['email'];
$user_project_id = $_GET['project'];
$user_project_lang = $_GET['lang'];
$sql = "SELECT * FROM codes WHERE user_email='$user_email' and ID = $user_project_id";
$result = $conn->query($sql);
if ($result->num_rows == 0)
  header("LOCATION : ../profile/page.php");

$row = $result->fetch_assoc();
$code = $row['code'];
$extention = $row['extention'];
$display_lang =  $extention == 'js' ? "Javascript" : "Python";
$display_name = $row['proj_name'];



?>

<body class="code-editor">
  <div class="grouper">
    <nav class="cus-navbar">
      <div class="d-flex gap-3">
        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <i class="fa-solid fa-bars"></i>
        </a>
        <div><?php echo $display_lang; ?> / <?php echo $display_name; ?></div>
      </div>
      <div>
        <!-- Play Button And Profile Button                   -->

        <div class="d-flex gap-4">
          <span style="cursor: pointer" id="playBtn"><i class="fa-solid fa-play"></i></span>
          <a href="../profile/page.php"> <span style="cursor: pointer"> <i class="fa-solid fa-user"></i> </span></a>
        </div>
      </div>

      <div class="cus-offcanvas offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <i class="fa-solid fa-folder"></i> &nbsp; Your Projects :
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <ul class="list-group list-group-flush">
              <?php

              $sql = "SELECT * FROM codes WHERE user_email='$user_email'";
              $result = $conn->query($sql);

              while ($row = $result->fetch_assoc()) {


              ?>
                <li class="list-group-item">
                  <a href="index.php?lang=<?php echo $row['extention']; ?>&project=<?php echo $row['ID']; ?>"><?php echo $row['proj_name']; ?></a>
                </li>
              <?php } ?>

              <input id="editor-lang" type="text" hidden value="<?php echo $extention; ?>">
              <input id="project-id" type="text" hidden value="<?php echo $user_project_id; ?>">
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="cus">
      <div id="editor">
        <?php echo $code; ?>
      </div>

      <div style="overflow-y: scroll" class="output" id="output">
        <span class="output--title"><span class="green-color">$output</span> :
        </span>
        <div style="padding-left: 20px" id="output--body"></div>
      </div>
    </div>
  </div>

  <script src="lib/js/ace-editor/src-min/ace.js"></script>
  <script src="lib/js/ace-editor/src-min/mode-javascript.js"></script>
  <script src="lib/js/ace-editor/src-min/ext-language_tools.js"></script>
  <script>
    var codeEditor = ace.edit("editor");
    codeEditor.setTheme("ace/theme/monokai");

    // Set language

    codeEditor.session.setMode("ace/mode/<?php echo $display_lang == "Javascript" ? "javascript" : "python" ?>"); ===

    // Set Options
    // codeEditor.setOptions({
    //   fontFamily: "Inconsolata",
    //   fontSize: "12pt",
    //   enableBasicAutocompletion: true,
    //   enableLiveAutocompletion: true,
    // });
  </script>
</body>

</html>
<?php $conn->close();
