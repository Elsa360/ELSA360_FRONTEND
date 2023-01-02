<?php
session_start();
$target_dir = "uploads/avatar/";
if(isset($_FILES['file']['name'])){

   /* Getting file name */
   $filename = $_FILES['file']['name'];

   /* Location */
   $location = $target_dir.$filename;
   $imageFileType = pathinfo($location,PATHINFO_EXTENSION);
   $imageFileType = strtolower($imageFileType);

   $location = $target_dir.$_SESSION["idUsuario"].".".$imageFileType;

   /* Valid extensions */
   $valid_extensions = array("jpg","jpeg","png");

   $response = 0;
   /* Check file extension */
   if(in_array(strtolower($imageFileType), $valid_extensions)) {
      /* Upload file */
      if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
         $response = $location;
      } else {
      echo "-->NO";
      echo "<hr />".$_FILES['file']['tmp_name'];
      echo "<hr />".$location;
      }

      
   }

   echo $response;
  exit;
}

echo 0;


if (!isset($_FILES['file'])) {
  ?>
  <form action="_avatar.php" method="post" enctype="multipart/form-data">
    <input type="file" name="file" id="file" />
    <input type="submit" />
  </form>
  <?php
}