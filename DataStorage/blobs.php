<?php require_once('header.html');?>
<section>
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <h1>Binary Large Objects</h1>
            <form enctype="multipart/form-data" method="post" name="profileStyle">
                <div class="form-group>">
                    <label for="email">Username</label>
                    <input type="email" class="form-control" name="userid" placeholder="email" id="email" autocomplete="on" autofocus required  />
                </div>
                <div class="form-group>">
                    <label for="file">Styles to save</label>
                    <input type="file" class="form-control" name="file" id="file" required />
                </div>
                <button type="button" class="btn btn-primary" id="send">Send</button>                
            </form>
        </div>
        <div class="col-sm-6">
            <?php
                $file = "../assets/tc.jpg";
                $fileHandle =fopen($file, "r");
                $binary = fread($fileHandle, filesize($file));
                fclose($fileHandle);
                $base64Str = base64_encode($binary);
            
                $mimeType = mime_content_type($file);
            ?>
            <p><img src="data:<?= $mimeType ?>;base64,<?= $base64Str ?>" id="dataUrlPix" /></p>
            <p>This dataUrl image will be appended to the form as Blob when the send button is clicked</p>
        </div>
    </div>
</div>
</section>
<?php 
$scriptTag = '<script src="js/blob.js"></script>';
require_once('footer.html');
?>