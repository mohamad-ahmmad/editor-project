<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Code Compiler | Home</title>
  <script type="module" crossorigin src="assets/main.f9cce4db.js"></script>
  <link rel="stylesheet" href="assets/style.c8400453.css" />
</head>

<body style="background-color: white">
  <?php if (isset($_GET["error"]) && $_GET["error"] == 'Wrong Password') {

    echo '<div class="alert alert-danger mb-0" role="alert">
<strong>Incorrect Email or Password!</strong>
</div>';
  }
  ?>
  <?php if (isset($_GET["error"]) && $_GET["error"] == 'Email Exists') {

    echo '<div class="alert alert-danger mb-0" role="alert">
<strong>This email is already in use!</strong>
</div>';
  }
  ?>
  <?php if (isset($_GET["error"]) && $_GET["error"] == 'Username Exists') {

    echo '<div class="alert alert-danger mb-0" role="alert">
<strong>This Username already exists!</strong>
</div>';
  }
  ?>


  <div class="fluid-container">
    <nav class="sticky-top navbar navbar-expand-lg bg-light navbar-custom">
      <div class="container-fluid">
        <a class="navbar-brand navbar-brand-custom" href="index.php"> <img width="300px" src="./assets/logo-white.png" alt="Online Editor Logo" class="nav--img d-inline-block align-text-top img-fluid" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nnn nav-link" aria-current="page" href="#home">
                <span class="tess">Home</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a style="margin-right:8px;" class=" nav-link" href="#faq">FAQ</a>
            </li>

            <li class="nav-item ms-6">
              <div class="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  Sign in
                </button>

                <form action="backend/login.php" method="post" class="home--login dropdown-menu p-3 dropdown-menu-end dropdown-menu-lg-start">


                  <div class="mb-3">
                    <label for="uname" class="form-label">Email address</label>
                    <input value="<?php if (isset($_COOKIE["username"])) {
                                    echo $_COOKIE["username"];
                                  } ?>" type="email" class="form-control" id="uname" placeholder="email@example.com" name="Email" required />
                  </div>
                  <div>
                    <label for="password" class="form-label">Password</label>
                    <input required value="<?php if (isset($_COOKIE["password"])) {
                                              echo $_COOKIE["password"];
                                            } ?>" type="password" class="form-control" id="password" placeholder="Password" name="password" />
                  </div>
                  <div class="mb-4">
                    <div class="form-check">
                      <input name="remember" type="checkbox" class="form-check-input" id="dropdownCheck2" />
                      <label class="form-check-label" for="dropdownCheck2">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Sign in
                  </button>
                </form>
              </div>
            </li>

            <li class="nav-item ms-2">
              <a style="display:inline-block;" href="#sign-up" type="button" class="sign-up nav-link btn btn-outline-primary">
                Signup
              </a>
              <!-- <a class="sign-up nav-link btn btn-outline-primary" href="#"
                  >Sign up</a
                > -->
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-- Start Home Section ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-->

    <section class="home" id="home">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="intro">
              <h1 class="mb-5">
                <span class="intro--title">Your Fav Online Code Editor!</span>
                <span class="intro--quote">
                  <img class="l-q" width="15" src="data:image/png;base64,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" alt="" />&nbsp;Code Editor Programmer's Second Home
                  <img class="r-q" width="15" src="data:image/png;base64,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" alt="" />
                </span>
                <div style="position: relative">
                  <span class="arrow">></span>
                  <code id="typing" class="intro--desc"></code>
                </div>
              </h1>
              <div id="container">
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow1"></span>
                  </span>
                  <span class="button-text">Learn More</span>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-2">
            <div class="text-center">
              <img src="assets/coding3.3bd411e1.png" alt="Coding " class="img-custom img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,224L60,224C120,224,240,224,360,197.3C480,171,600,117,720,128C840,139,960,213,1080,213.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,320L0,96L36.9,96L36.9,256L73.8,256L73.8,128L110.8,128L110.8,128L147.7,128L147.7,0L184.6,0L184.6,160L221.5,160L221.5,160L258.5,160L258.5,128L295.4,128L295.4,288L332.3,288L332.3,256L369.2,256L369.2,288L406.2,288L406.2,192L443.1,192L443.1,256L480,256L480,128L516.9,128L516.9,192L553.8,192L553.8,256L590.8,256L590.8,64L627.7,64L627.7,160L664.6,160L664.6,192L701.5,192L701.5,160L738.5,160L738.5,0L775.4,0L775.4,224L812.3,224L812.3,32L849.2,32L849.2,96L886.2,96L886.2,32L923.1,32L923.1,0L960,0L960,320L996.9,320L996.9,288L1033.8,288L1033.8,64L1070.8,64L1070.8,128L1107.7,128L1107.7,96L1144.6,96L1144.6,64L1181.5,64L1181.5,256L1218.5,256L1218.5,64L1255.4,64L1255.4,320L1292.3,320L1292.3,160L1329.2,160L1329.2,64L1366.2,64L1366.2,160L1403.1,160L1403.1,256L1440,256L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
          ></path>
        </svg> -->
    </section>
    <!-- FEATURES START-->
    <section class="features" id="features">
      <h1 class="page-heading text-center">Features</h1>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="features--img text-center">
              <img width="50%" src="assets/Free.a39572aa.png" alt="Arranging Files" class="img-custom img-fluid" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="features--text">
              <div>
                <div class="img-div">
                  <img width="45%" style="opacity: 0.5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACgCAYAAAAxbO9NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzBDRjQ5QTM3MDI4MTFFRDhCMEZDRjMxMjlGOTZFOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzBDRjQ5QTQ3MDI4MTFFRDhCMEZDRjMxMjlGOTZFOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMENGNDlBMTcwMjgxMUVEOEIwRkNGMzEyOUY5NkU4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMENGNDlBMjcwMjgxMUVEOEIwRkNGMzEyOUY5NkU4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PifXg0UAAAdpSURBVHja7J15qBVV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" alt="number one" class="img-custom img-fluid" />
                </div>
                <h1>FREE TO USE</h1>
                <p style="margin-bottom: 0px" class="lead lh-md">
                  This website is completly free to use!
                </p>

                <p style="margin-bottom: 7rem" class="lead lh-md">
                  You can compile your codes without having to pay anything!
                  All you have to do is sign up then you are ready to go!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 order-last order-lg-first">
            <div class="features--text">
              <div>
                <div class="img-div">
                  <img width="45%" style="opacity: 0.5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACgCAYAAAAxbO9NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjFFRjcyMDk3MDI3MTFFRDg2Qjc4NTUwQ0E4NUEyMjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjFFRjcyMEE3MDI3MTFFRDg2Qjc4NTUwQ0E4NUEyMjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMUVGNzIwNzcwMjcxMUVEODZCNzg1NTBDQTg1QTIyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMUVGNzIwODcwMjcxMUVEODZCNzg1NTBDQTg1QTIyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmu3WTMAAAsBSURBVHja7J0JjFXV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" alt="number one" class="img-custom img-fluid" />
                </div>

                <h1>ORGANIZED</h1>
                <p style="margin-bottom: 0px" class="lead lh-md">
                  You don't have to worry about organizing your work!
                </p>

                <p style="margin-bottom: 7rem" class="lead lh-md">
                  We keep all of your work organized, we make it easy for you
                  to write/edit your codes!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-first order-lg-last">
            <div class="features--img text-center">
              <img width="50%" src="assets/Arranging.92294846.png" alt="Arranging Files" class="img-custom img-fluid" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="features--img text-center">
              <img width="50%" src="assets/Language.56396e3e.png" alt="Arranging Files" class="img-custom img-fluid" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="features--text">
              <div>
                <div class="img-div">
                  <img width="45%" style="opacity: 0.5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACgCAYAAAAxbO9NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDNCNUU1MDU3MDI4MTFFRDk2OUFEQzZCNDVFMEY4RjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDNCNUU1MDY3MDI4MTFFRDk2OUFEQzZCNDVFMEY4RjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowM0I1RTUwMzcwMjgxMUVEOTY5QURDNkI0NUUwRjhGNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowM0I1RTUwNDcwMjgxMUVEOTY5QURDNkI0NUUwRjhGNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr5yqdAAAAw3SURBVHja7J0NsFVV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" alt="number one" class="ml-0 img-custom img-fluid" />
                </div>
                <h1>LANGUAGES</h1>
                <p style="margin-bottom: 0px" class="lead lh-md">
                  We support many languages!
                </p>

                <p class="features--last lead lh-md">
                  Java, C++, Python, And much more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="sign-up" class="try">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,160L48,186.7C96,213,192,267,288,266.7C384,267,480,213,576,170.7C672,128,768,96,864,106.7C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>



      <div class="container-fluid">
        <div class="align-items-center justify-content-center row">
          <div class="sign-label col-2">SIGN UP</div>
          <div class="col-7">
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">Enter your information:</h5>

                <form class="form-floating" method="post" action="backend/Signup.php">
                  <div class="form-group">

                    <label for="exampleInputEmail1">Email address</label>
                    <input required name="email" type="email" class="mb-3 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="youremail@example.com">

                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Username:</label>
                    <input required name="username" type="text" class="mb-3 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Username">

                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="pass" type="password" class="mb-3 form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>

                  <button style="color:white; font-weight:600;" type="submit" class="btn btn-primary">Create Account</button>
                </form>



              </div>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,160L48,186.7C96,213,192,267,288,266.7C384,267,480,213,576,170.7C672,128,768,96,864,106.7C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>

    <section class="faq" id="faq">
      <div class="container">
        <h1 class="page-heading text-center">FAQ</h1>
        <div class="accordion" id="accordionExample">
          <div style="margin-bottom: 2rem" class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="font-weight: 500">
                What is this site and how do i use it?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                This site provides you the ability to
                <strong>Edit and Develop</strong> a simple project, you call
                it a mini project. All you have to do so is register your
                account and create a new workshop to start writing and editing
                your own codes!
              </div>
            </div>
          </div>
          <div style="margin-bottom: 2rem" class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="font-weight: 500">
                Is this website free?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                This answer is <strong>Yes</strong>, this website is completly
                free to use to all users, you don't have to pay anything to
                have free access to all of our features.
              </div>
            </div>
          </div>
          <div style="margin-bottom: 2rem" class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="font-weight: 500">
                What languages do you support?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Our editor supports a variety of languages, it supports
                <strong>most</strong> of the common programming languages,
                such as Java, C++, Javascript, Python, Php etc..
              </div>
            </div>
          </div>
          <div style="margin-bottom: 2rem" class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style="font-weight: 500">
                Can i save and edit my projects?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>Yes</strong>. All of your projects are saved and
                stored in our database, you can return to them and edit them
                at any time you want.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="footer" id="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,245.3C384,267,480,277,576,261.3C672,245,768,203,864,176C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <div class="container">
        <div class="footer-imgs row justify-content-center">
          <div class="cc col-2">
            <img width="40%" src="./imgs/js-svgrepo-com.svg" alt="number one" class="footer-img img-fluid" />
          </div>
          <div class="cc col-2">
            <img width="40%" src="./imgs/java-svgrepo-com.svg" alt="number one" class="footer-img img-fluid" />
          </div>
          <div class="cc col-2">
            <img width="40%" src="./imgs/c-logo-svgrepo-com.svg" alt="number one" class="footer-img img-fluid" />
          </div>
          <div class="cc col-2">
            <img width="40%" src="./imgs/py-svgrepo-com.svg" alt="number one" class="footer-img img-fluid" />
          </div>
        </div>
        <div class="container p-5"></div>
        <div class="justify-content-center row">
          <div class="col-3 justify-content-center ">
            <div class="company" class="mx-2">
              <img width="80%" src="./assets/logo-white.png" alt="Online Editor Logo" class="img-fluid" />
              <p class="footer-text lh-md">
                Copyright © 2022 by Online-Editor, Inc. All rights reserved.
              </p>
            </div>
          </div>

          <div class="col-3 justify-content-center ">
            <div class="mx-2">
              <h3 class="footer--title">Contact Us</h3>
              <p class="footer-text lh-md">
                An-Najah National University, Faculty of Engineering, First
                Floor, myEmail@gmail.com
              </p>
            </div>
          </div>
          <div class="col-3 justify-content-center ">
            <div class="mx-2">
              <h3 class="footer--title">Account</h3>
              <ul class="footer-text">
                <li>
                  <a href="#home">Login</a>
                </li>
                <li><a href="#sign-up">Sign Up</a></li>
              </ul>
            </div>
          </div>
          <div class="col-3 justify-content-center ">
            <div class="about-us mx-2">
              <h3 class="footer--title">SITE</h3>
              <ul class="footer-text">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#sign-up">Sign Up</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <script src="https://unpkg.com/@popperjs/core@2"></script>

</body>

</html>