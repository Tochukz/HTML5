<?php require_once('header.html'); ?>
<section>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
                <h2>Embeded binary data in img tag</h2>
                <p>The images' source attribute values conatains the embeded image binary. <br />
                    The browser will not make any http request for the images </p>
                <?php
                    $fileHandle = fopen('../assets/tc.jpg', 'r');
                    $content = fread($fileHandle, filesize('../assets/tc.jpg'));  
                    fclose($fileHandle);
                    $base64Data = base64_encode($content);                   
                    $mimeType = mime_content_type('../assets/tc.jpg')
				?>
                
                <img src="data:image/jpeg;base64,<?= $base64Data ?>" />
                <!--using dynamically generated mime type -->
                <img src="data:<?= $mimeType ?>;base64,<?= $base64Data ?>" />
			</div>
		</div>		
	</div>
</section>
<?php require_once('footer.html'); ?>

