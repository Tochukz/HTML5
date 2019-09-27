<?php require_once('header.html'); ?>
<section>
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
                <h1>Web Storage (localStorage)</h1>
                <form id="local">
                    <label>User:</label>
                    <input type="text" name="user" id="user" class="form-control"/>
                    <label>City:</label>
                    <input type="text" name="city" id="city" class="form-control" />
                    <button type="button" id="localBtn" class="btn btn-primary">Save local</button>
                </form>	
                <p>LocalStorage will persist data even after the user closes the browser window.</p>
			</div>
            <div class="col-sm-6">
                <h1>Web Storage (sessionStorage)</h1>                
				<form id="session">
                    <label>Dev:</label>
                    <input type="text" name="dev" id="dev" class="form-control"/>
                    <label>Lang:</label>
                    <input type="text" name="lang" id="lang" class="form-control" />
                    <button type="button" id="sessionBtn" class="btn btn-primary">Save Session</button>
                </form>
                <p>sessionStorage will lose data when browser window is closed.</p>
			</div>
		</div>		
	</div>
</section>
<?php 
    $scriptTag = '<script src="js/webstorage.js"></script>';
    require_once('footer.html');
?>

