<?php
if(isset($_REQUEST) && isset($_FILES)){
    $file = "storage.tmp";
    $handle = fopen($file, "w");
    $userData = json_encode(array_merge(['Request' => $_REQUEST], ['Files' => $_FILES] ));
    fwrite($handle, $userData);
    fclose($handle); 
    echo $userData;
    foreach($_FILES as $file){
        if($file['tmp_name']){
            move_uploaded_file($file['tmp_name'], '../uploads/'.$file['name']);
            echo " ".$file['name'].' has been saved in remote server.';
        }
    }
}