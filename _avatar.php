<?php
session_start();
$target_dir = "uploads/avatar/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    $msg = "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    $msg = "File is not an image.";
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  $msg = "Sorry, file already exists.";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  $msg = "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  $msg = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  $msg .= "<br />Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  $finalfile = $target_dir.$_SESSION["idUsuario"].".".$imageFileType;
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $finalfile)) {
    $msg = "The file ". $finalfile. " has been uploaded.";
  } else {
    $msg = "Sorry, there was an error uploading your file.";
    echo $finalfile;
  }
}
?>
<!DOCTYPE html>
<html>
<body>
  por favor espere...
  <script>
    sessionStorage.setItem("uploadmessage","<?php echo $msg; ?>");
    localStorage.setItem("avatar","<?php echo $finalfile; ?>");
    location.href = "/html/vertical-menu-template/pages-account.html";

  </script>

</body>
</html>
